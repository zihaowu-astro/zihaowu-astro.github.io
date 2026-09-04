---
title: "Software"
permalink: /software/
layout: splash
classes:
  - wide-figures
---
## [NMFwisp](https://zihaowu-astro.github.io/NMFwisp/)

<div class="entry-row" markdown="1">
<div class="entry-text" markdown="1">

[GitHub](https://github.com/zihaowu-astro/NMFwisp) · [Documentation](https://zihaowu-astro.github.io/NMFwisp/) · `pip install nmfwisp`

Wisps are among the most severe scattered-light artifacts in JWST/NIRCam, contaminating up to a quarter of the area in the worst-affected detectors. Their morphology varies between observations, so subtraction with a single fixed template leaves substantial residuals. NMFwisp models each exposure with multi-component templates derived by non-negative matrix factorization (NMF), which captures that variation and yields visibly cleaner backgrounds than the standard STScI method. It is part of the data reduction pipeline for the JWST Advanced Deep Extragalactic Survey (JADES), described in [Wu et al. (2026)](https://iopscience.iop.org/article/10.3847/1538-3881/ae8254), and is straightforward to apply to any NIRCam program.

</div>
<div class="entry-fig" markdown="1">

{% include figure
   image_path="/assets/fig/wisp_model.gif"
   alt="wisp"
   caption="A contaminated JWST/NIRCam image (top left) and the NMF wisp model (top right), with the residuals after subtracting the default STScI template (bottom left) and the NMF model (bottom right)." %}

</div>
</div>

## [hMPT](https://github.com/zihaowu-astro/hMPT)

<div class="entry-row" markdown="1">
<div class="entry-text" markdown="1">

[GitHub](https://github.com/zihaowu-astro/hMPT)

The yield of a NIRSpec MSA program is set by how many targets land in open shutters, which depends on the pointing and the position angle together. hMPT optimizes both: it searches pointing and PA jointly, then continues the optimization near the best grid solutions instead of stopping at the grid, which recovers appreciably more targets. It also lets faint sources be favored toward shutter centers to preserve throughput, and applies a flexible criterion for shutter conflicts. The sky-to-shutter projection follows [eMPT](https://github.com/esdc-esac-esa-int/eMPT_v1). Developed with Daniel Eisenstein and Samuel McCarty.

</div>
<div class="entry-fig" markdown="1">

{% include figure
   image_path="/assets/fig/software/hmpt.webp"
   alt="Optimized JWST/NIRSpec MSA configuration"
   caption="An optimized MSA configuration across the four NIRSpec quadrants. Green points are targets placed in open shutters; gray points are candidates that could not be accommodated." %}

</div>
</div>

## [jwst-schedulability](https://wuzihao.site/jwst-schedulability/)

<div class="entry-row" markdown="1">
<div class="entry-text" markdown="1">

[Web app](https://wuzihao.site/jwst-schedulability/) · [GitHub](https://github.com/zihaowu-astro/jwst-schedulability)

Planning a JWST program means knowing when a target is visible and what position angles come with each window. This tool answers both in the browser: pin a target and it returns its visibility windows over the coming years together with the nominal V3 PA, the allowed roll, and the NIRSpec aperture PA. The field of regard, the target, and the survey fields are drawn on a rotatable celestial sphere, so the geometry behind a given window is apparent at a glance — useful for scoping a program or an MSA position angle before turning to APT. Developed with Claude Code.

</div>
<div class="entry-fig" markdown="1">

{% include figure
   image_path="/assets/fig/software/jwst-schedulability.webp"
   alt="JWST field of regard visualization"
   caption="The field of regard on 2027 Sep 9, with a target pinned in GOODS-S. The side panel reports the solar elongation, the nominal V3 position angle and allowed roll, the NIRSpec aperture position angle, and the visibility windows over the next two years." %}

</div>
</div>

## [cosmo-calc](https://wuzihao.site/cosmo-calc/)

<div class="entry-row" markdown="1">
<div class="entry-text" markdown="1">

[Web app](https://wuzihao.site/cosmo-calc/) · [GitHub](https://github.com/zihaowu-astro/cosmo-calc)

A browser-based cosmology calculator for flat ΛCDM, in the spirit of [Ned Wright's Cosmology Calculator](https://astro.ucla.edu/~wright/CosmoCalc.html) but aimed at high-redshift work: it returns the age at a given redshift, lookback time, comoving, angular-diameter and luminosity distances, comoving volume, and the angular and radial scales, and plots how they run with *z*. Radiation is included, so the results remain accurate well beyond the reach of matter-only approximations, and all quantities agree with Astropy to better than 0.01% for *z* ≤ 20. Conventions follow [Hogg (1999)](https://arxiv.org/abs/astro-ph/9905116), with Planck 2018 and WMAP9 preset. Developed with Claude Code.

</div>
</div>
