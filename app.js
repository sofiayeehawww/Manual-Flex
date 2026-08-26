/* =====================================================================
   FLEXIBILIDAD ACTIVA — app.js
   Enrutamiento por hash entre 3 vistas (Inicio / Biblioteca / Detalle),
   filtros de la biblioteca, y galería de medios (imagen/GIF) con lightbox.
   Sin frameworks ni build step — vanilla JS para que sea fácil de editar.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
     Iconos — sistema propio de línea (24x24, stroke=currentColor).
     Un mismo set de iconos de "zona corporal" se reutiliza en los
     chips de filtro, las tarjetas de la biblioteca y el detalle.
     --------------------------------------------------------------- */
  const ICONS = {
    search: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`,
    close: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
    chevronLeft: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>`,
    chevronRight: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>`,
    chevronDown: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
    play: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5.5v13l11-6.5z"/></svg>`,
    image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M20 15l-4.5-4.5a1.5 1.5 0 0 0-2.1 0L5 19"/></svg>`,
    layers: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>`,
    sliders: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h14M22 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></svg>`,
  };

  // Iconos de zona corporal — glifos simples y consistentes, pensados
  // para leerse bien a 14–34px. Son el "lenguaje visual" propio del sitio.
  const ZONE_ICONS = {
    hombro: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16c0-4.5 2.2-8 6.5-9.4"/><circle cx="15.5" cy="8.8" r="3"/><path d="M15.5 11.8V19"/></svg>`,
    toracico: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16"/><path d="M12 8.5c-3 0-5.2 1.4-7 3"/><path d="M12 8.5c3 0 5.2 1.4 7 3"/><path d="M12 13.5c-2.4 0-4.4 1.1-6 2.5"/><path d="M12 13.5c2.4 0 4.4 1.1 6 2.5"/></svg>`,
    antebrazo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19.5L15 9"/><circle cx="17.3" cy="6.7" r="2.4"/><path d="M8.3 15.7l1.7 1.7M10.3 13.7l1.7 1.7"/></svg>`,
    columna: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M8.5 7.5h7M8.5 12h7M8.5 16.5h7"/></svg>`,
    cadera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 5h11"/><path d="M6.5 5c0 6.2 1.8 9.3 3 14M17.5 5c0 6.2-1.8 9.3-3 14"/></svg>`,
    rodilla: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8.3 4v9l7 7"/><circle cx="8.3" cy="13.3" r="2.3"/></svg>`,
    tobillo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3v10.8"/><circle cx="10" cy="15.3" r="2.2"/><path d="M10 17.4c0 2 2.2 2.9 7.5 2.9"/></svg>`,
    pie: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="10.8" cy="15.2" rx="5" ry="6.8"/><circle cx="7.8" cy="5.2" r="1" fill="currentColor" stroke="none"/><circle cx="10.6" cy="4.2" r="1.1" fill="currentColor" stroke="none"/><circle cx="13.4" cy="4.6" r="1" fill="currentColor" stroke="none"/><circle cx="15.7" cy="5.8" r=".9" fill="currentColor" stroke="none"/></svg>`,
  };

  function zoneIcon(zoneId, cls) {
    const svg = ZONE_ICONS[zoneId] || ICONS.image;
    return cls ? svg.replace("<svg ", `<svg class="${cls}" `) : svg;
  }

  function escapeHtml(str) {
    return String(str || "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  /* ---------------------------------------------------------------
     Estado + helpers de datos
     --------------------------------------------------------------- */
  let filterState = { block: null, zone: null, equip: null, q: "" };
  let moreFiltersOpen = false;

  function blockById(id) { return BLOCKS.find((b) => b.id === id); }
  function zoneLabel(id) { const z = ZONES.find((z) => z.id === id); return z ? z.label : id; }
  function equipLabel(id) { const e = EQUIPMENT.find((e) => e.id === id); return e ? e.label : id; }

  function exerciseVideoUrl(ex) {
    if (ex.video) return ex.video;
    if (ex.groupVideo && typeof GROUP_VIDEOS !== "undefined") return GROUP_VIDEOS[ex.groupVideo];
    return null;
  }

  /* ---------------------------------------------------------------
     ROUTER — hash-based: #/  #/biblioteca  #/ejercicio/:id
     --------------------------------------------------------------- */
  const views = {
    home: document.getElementById("view-home"),
    library: document.getElementById("view-library"),
    detail: document.getElementById("view-detail"),
  };
  const tabs = [...document.querySelectorAll(".tab")];
  const tabIndicator = document.getElementById("tabIndicator");

  function parseRoute() {
    const raw = (location.hash || "#/").slice(1);
    if (raw.startsWith("/ejercicio/")) {
      const id = parseInt(raw.split("/")[2], 10);
      return { name: "detail", id };
    }
    if (raw === "/biblioteca") return { name: "library" };
    return { name: "home" };
  }

  function setActiveTabIndicator(routeName) {
    const targetRoute = routeName === "detail" ? "/biblioteca" : (routeName === "library" ? "/biblioteca" : "/");
    const activeTab = tabs.find((t) => t.dataset.route === targetRoute);
    if (!activeTab || !tabIndicator) return;
    const tabRect = activeTab.getBoundingClientRect();
    const parentRect = activeTab.parentElement.getBoundingClientRect();
    tabIndicator.style.width = tabRect.width + "px";
    tabIndicator.style.transform = `translateX(${tabRect.left - parentRect.left}px)`;
    tabs.forEach((t) => t.classList.toggle("is-active", t === activeTab));
  }

  function renderRoute() {
    const route = parseRoute();
    Object.values(views).forEach((v) => v.classList.remove("is-active"));

    if (route.name === "home") {
      views.home.classList.add("is-active");
    } else if (route.name === "library") {
      views.library.classList.add("is-active");
      renderLibrary();
    } else if (route.name === "detail") {
      const ex = EXERCISES.find((e) => e.id === route.id);
      if (!ex) { location.hash = "#/biblioteca"; return; }
      views.detail.classList.add("is-active");
      renderDetail(ex);
    }
    setActiveTabIndicator(route.name);
    window.scrollTo({ top: 0, behavior: "instant" in window.scrollTo ? "instant" : "auto" });
  }

  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("resize", () => setActiveTabIndicator(parseRoute().name));

  /* ---------------------------------------------------------------
     LIBRARY — filtros + grid
     --------------------------------------------------------------- */
  const grid = document.getElementById("exerciseGrid");
  const zoneChipsEl = document.getElementById("zoneChips");
  const blockChipsEl = document.getElementById("blockChips");
  const equipChipsEl = document.getElementById("equipChips");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const clearBtn = document.getElementById("clearFilters");
  const resultCountEl = document.getElementById("resultCount");
  const moreFiltersToggle = document.getElementById("moreFiltersToggle");
  const moreFiltersPanel = document.getElementById("moreFiltersPanel");

  function buildZoneChips() {
    zoneChipsEl.innerHTML = ZONES.map((z) => {
      const count = EXERCISES.filter((e) => e.zones.includes(z.id)).length;
      return `<button type="button" class="chip" data-zone="${z.id}">${zoneIcon(z.id, "icon icon-sm")}${z.label}<span class="count">${count}</span></button>`;
    }).join("");
    zoneChipsEl.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        filterState.zone = filterState.zone === chip.dataset.zone ? null : chip.dataset.zone;
        renderLibrary();
      });
    });
  }

  function buildSecondaryChips() {
    blockChipsEl.innerHTML = BLOCKS.map((b) => {
      const count = EXERCISES.filter((e) => e.block === b.id).length;
      return `<button type="button" class="chip" data-block="${b.id}">B${b.id}<span class="count">${count}</span></button>`;
    }).join("");
    equipChipsEl.innerHTML = EQUIPMENT.map((eq) => {
      const count = EXERCISES.filter((e) => e.equipment.includes(eq.id)).length;
      return `<button type="button" class="chip" data-equip="${eq.id}">${eq.label}<span class="count">${count}</span></button>`;
    }).join("");
    blockChipsEl.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        filterState.block = filterState.block === parseInt(chip.dataset.block, 10) ? null : parseInt(chip.dataset.block, 10);
        renderLibrary();
      });
    });
    equipChipsEl.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        filterState.equip = filterState.equip === chip.dataset.equip ? null : chip.dataset.equip;
        renderLibrary();
      });
    });
  }

  function matchesFilters(ex) {
    if (filterState.block && ex.block !== filterState.block) return false;
    if (filterState.zone && !ex.zones.includes(filterState.zone)) return false;
    if (filterState.equip && !ex.equipment.includes(filterState.equip)) return false;
    if (filterState.q) {
      const hay = (ex.name + " " + (ex.altName || "") + " " + (ex.enfoque || "")).toLowerCase();
      if (!hay.includes(filterState.q.toLowerCase())) return false;
    }
    return true;
  }

  function cardMediaHTML(ex) {
    if (ex.media && ex.media.length) {
      const m = ex.media[0];
      return `<div class="card-media"><img src="${m.src}" alt="${escapeHtml(m.alt || ex.name)}" loading="lazy"></div>`;
    }
    return `<div class="card-media card-media--empty">${zoneIcon(ex.zones[0])}</div>`;
  }

  function cardHTML(ex) {
    const b = blockById(ex.block);
    const tags = [...ex.zones.map(zoneLabel), ...ex.equipment.map(equipLabel)].slice(0, 3);
    return `
      <a href="#/ejercicio/${ex.id}" class="card" data-id="${ex.id}">
        ${cardMediaHTML(ex)}
        <div class="card-body">
          <span class="card-eyebrow">${zoneIcon(ex.zones[0], "icon")}Bloque ${ex.block}</span>
          <h3>${escapeHtml(ex.name)}</h3>
          ${ex.altName ? `<span class="card-alt">${escapeHtml(ex.altName)}</span>` : ""}
          <div class="card-tags">${tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
        </div>
      </a>
    `;
  }

  function renderLibrary() {
    const filtered = EXERCISES.filter(matchesFilters);
    resultCountEl.innerHTML = `<b>${filtered.length}</b> de ${EXERCISES.length} ejercicios`;

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state"><strong>Sin coincidencias</strong><p>Ningún ejercicio cumple estos filtros. Prueba quitando alguno.</p></div>`;
    } else {
      grid.innerHTML = filtered.map(cardHTML).join("");
    }

    zoneChipsEl.querySelectorAll(".chip").forEach((c) => c.classList.toggle("is-active", filterState.zone === c.dataset.zone));
    blockChipsEl.querySelectorAll(".chip").forEach((c) => c.classList.toggle("is-active", filterState.block === parseInt(c.dataset.block, 10)));
    equipChipsEl.querySelectorAll(".chip").forEach((c) => c.classList.toggle("is-active", filterState.equip === c.dataset.equip));
    clearBtn.classList.toggle("show", !!(filterState.block || filterState.zone || filterState.equip || filterState.q));
  }

  searchInput.addEventListener("input", (e) => {
    filterState.q = e.target.value;
    searchClear.classList.toggle("show", filterState.q.length > 0);
    renderLibrary();
  });
  searchClear.addEventListener("click", () => {
    filterState.q = "";
    searchInput.value = "";
    searchClear.classList.remove("show");
    searchInput.focus();
    renderLibrary();
  });
  clearBtn.addEventListener("click", () => {
    filterState = { block: null, zone: null, equip: null, q: "" };
    searchInput.value = "";
    searchClear.classList.remove("show");
    renderLibrary();
  });
  moreFiltersToggle.addEventListener("click", () => {
    moreFiltersOpen = !moreFiltersOpen;
    moreFiltersToggle.classList.toggle("is-open", moreFiltersOpen);
    moreFiltersPanel.classList.toggle("is-open", moreFiltersOpen);
  });

  /* ---------------------------------------------------------------
     DETAIL — vista de un ejercicio
     --------------------------------------------------------------- */
  const detailRoot = document.getElementById("detailContent");

  function tempoStripHTML(tempo) {
    const m = tempo.match(/(\d+)-(\d+)-(\d+)-(\d+)/);
    if (!m) return "";
    const labels = ["Bajada", "Pausa", "Subida", "Pausa"];
    return `<div class="tempo-strip">${[1, 2, 3, 4].map((i) => `
      <div class="tempo-seg"><div class="v">${m[i]}s</div><div class="l">${labels[i - 1]}</div></div>
    `).join("")}</div>`;
  }

  function mediaGalleryHTML(ex) {
    if (!ex.media || !ex.media.length) {
      return `
        <div class="media-empty">
          ${zoneIcon(ex.zones[0])}
          <p>Aún no hay foto o GIF para este ejercicio.</p>
          <span>Se agrega editando el arreglo <code>media</code> en <code>data.js</code>.</span>
        </div>`;
    }
    return `
      <div class="media-gallery">
        <div class="media-track">
          ${ex.media.map((m) => `
            <button type="button" class="media-item" data-src="${m.src}" data-alt="${escapeHtml(m.alt || ex.name)}">
              <img src="${m.src}" alt="${escapeHtml(m.alt || ex.name)}" loading="lazy">
            </button>
          `).join("")}
        </div>
        ${ex.media.length > 1 ? `<div class="media-dots">${ex.media.map((_, i) => `<span class="dot${i === 0 ? " is-active" : ""}" data-i="${i}"></span>`).join("")}</div>` : ""}
      </div>`;
  }

  function videoLinkHTML(ex) {
    const url = exerciseVideoUrl(ex);
    if (!url) return "";
    const label = ex.video ? "Ver video de referencia" : "Ver video de referencia del bloque";
    return `<a class="video-pill" href="${url}" target="_blank" rel="noopener">${ICONS.play}${label}</a>`;
  }

  function renderDetail(ex) {
    const idx = EXERCISES.findIndex((e) => e.id === ex.id);
    const prev = EXERCISES[idx - 1];
    const next = EXERCISES[idx + 1];
    const doseParts = (ex.dosificacion || "").split("Tempo");
    const seriesText = doseParts[0] ? doseParts[0].trim().replace(/\.$/, "") : "";
    const tempoMatch = (ex.dosificacion || "").match(/(\d+-\d+-\d+-\d+)/);

    detailRoot.innerHTML = `
      <div class="detail-head">
        <div class="detail-badge">${String(ex.id).padStart(2, "0")}</div>
        <div>
          <div class="detail-eyebrow">${zoneIcon(ex.zones[0], "icon")}Bloque ${ex.block} · ${escapeHtml(blockById(ex.block).title)}</div>
          <h1>${escapeHtml(ex.name)}</h1>
          ${ex.altName ? `<span class="detail-alt">${escapeHtml(ex.altName)}</span>` : ""}
          <div class="detail-tags">
            ${ex.zones.map((z) => `<span class="tag">${escapeHtml(zoneLabel(z))}</span>`).join("")}
            ${ex.equipment.map((eq) => `<span class="tag">${escapeHtml(equipLabel(eq))}</span>`).join("")}
          </div>
        </div>
      </div>

      ${mediaGalleryHTML(ex)}
      ${videoLinkHTML(ex)}

      ${ex.enfoque ? `<div class="detail-section"><h2>Enfoque</h2><div class="enfoque-box">${escapeHtml(ex.enfoque)}</div></div>` : ""}
      ${ex.objetivo ? `<div class="detail-section"><h2>Objetivo</h2><div class="enfoque-box">${escapeHtml(ex.objetivo)}</div></div>` : ""}

      ${ex.dosificacion ? `
      <div class="detail-section">
        <h2>Dosificación</h2>
        <div class="dose-strip">
          <div class="dose-block"><div class="l">Series / repeticiones</div><div class="v">${escapeHtml(seriesText)}</div></div>
          ${tempoMatch ? `<div class="dose-block"><div class="l">Tempo (segundos)</div>${tempoStripHTML(tempoMatch[1])}</div>` : ""}
        </div>
      </div>` : ""}

      <div class="detail-section">
        <h2>Técnica</h2>
        <ol class="steps">${ex.tecnica.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ol>
      </div>

      ${ex.nota ? `
      <div class="detail-section">
        <h2>Nota anatómica</h2>
        <div class="nota-block${ex.notaImage ? " has-image" : ""}">
          <div class="nota-box">${escapeHtml(ex.nota)}</div>
          ${ex.notaImage ? `<div class="nota-image"><img src="${ex.notaImage}" alt="Diagrama anatómico"></div>` : ""}
        </div>
      </div>` : ""}

      <div class="detail-nav">
        ${prev ? `<a class="nav-btn prev" href="#/ejercicio/${prev.id}">${ICONS.chevronLeft}<span><span class="small">Anterior</span><span class="t">${escapeHtml(prev.name)}</span></span></a>` : "<span></span>"}
        ${next ? `<a class="nav-btn next" href="#/ejercicio/${next.id}"><span><span class="small">Siguiente</span><span class="t">${escapeHtml(next.name)}</span></span>${ICONS.chevronRight}</a>` : "<span></span>"}
      </div>
    `;

    const mediaItems = detailRoot.querySelectorAll(".media-item");
    mediaItems.forEach((btn) => {
      btn.addEventListener("click", () => openLightbox(btn.dataset.src, btn.dataset.alt));
    });

    // Vincula los puntos de la galería a lo que está visible al hacer scroll
    // horizontal (solo aplica cuando hay más de una imagen).
    const track = detailRoot.querySelector(".media-track");
    const dots = detailRoot.querySelectorAll(".media-dots .dot");
    if (track && dots.length) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = [...mediaItems].indexOf(entry.target);
            dots.forEach((d, di) => d.classList.toggle("is-active", di === i));
          }
        });
      }, { root: track, threshold: 0.6 });
      mediaItems.forEach((item) => obs.observe(item));
    }
  }

  /* ---------------------------------------------------------------
     LIGHTBOX — visor de imágenes a pantalla completa
     --------------------------------------------------------------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightboxCaption.textContent = alt || "";
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

  /* ---------------------------------------------------------------
     Inicio
     --------------------------------------------------------------- */
  document.getElementById("metaTotalExercises").textContent = EXERCISES.length;
  buildZoneChips();
  buildSecondaryChips();
  renderRoute();
})();
