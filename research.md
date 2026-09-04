---
title: "Research"
permalink: /research/
layout: splash
classes:
  - wide-figures
---


## An Earliest Overdensity Structure at Cosmic Dawn

<div class="entry-row" markdown="1">
<div class="entry-text" markdown="1">

Wu et al. (2026) [*The Astrophysical Journal*, 1006, 18](https://iopscience.iop.org/article/10.3847/1538-4357/ae7723)

We discover a candidate galaxy overdensity at *z ≈ 10.5*, only 500 Myr after the Big Bang: 18 galaxies with consistent photometric redshifts within 8 comoving Mpc, at four times the field density. The structure hosts 30% of the bright galaxies and 50% of the star formation at *10 < z < 12* in JADES GOODS-S, which suggests that early luminous galaxies assemble preferentially in overdense environments. Its abundance significantly exceeds the expectation from cosmological simulations such as TNG100, pointing to more efficient galaxy and structure formation than current models predict.

We have been approved for a JWST/NIRSpec program in Cycle 5 to confirm the structure spectroscopically and to probe its ionized bubble through Lyα emission, and for an ALMA program in Cycle 13 to constrain the halo mass and the gas properties of its members.

</div>

<div class="entry-fig" markdown="1">

{% include figure
   image_path="/assets/fig/overdensity.webp"
   alt="image"
   caption="Galaxy candidates at 10 < z_phot < 12 in the JADES/NIRCam GOODS–S footprint, color-coded by photometric redshift. Large circles are bright sources (F356W > 8 nJy); contours trace the density field from the mean to 4σ above it. The overdensity sits on the west side of the field, peaking above four times the mean. North is up, east is to the left."
   width="80%"           %}

</div>
</div>

## Extreme Deep Observation of a Galaxy at z=14

<div class="entry-row" markdown="1">
<div class="entry-text" markdown="1">

Wu et al. (2025) [*The Astrophysical Journal*, 992, 212](https://iopscience.iop.org/article/10.3847/1538-4357/ae01a1)

We lead the analysis of ultra-deep JWST observations of JADES-GS-z14-1 (*z = 13.86*), one of the two most distant galaxies known and by far the fainter of them. We found that it falls in a small overlap of JADES MIRI pointings and so carries a fortuitous 70-hour exposure, the deepest MIRI observation of any high-redshift galaxy. With 56 new hours of NIRSpec/PRISM spectroscopy and 16-band NIRCam imaging, the dataset probes a sub-luminous galaxy in the early Universe at a depth normally reserved for the brightest ones.

Working at this signal-to-noise required new machinery: exposure-level model-fitting photometry for NIRCam and MIRI, and a covariance-aware treatment of the PRISM spectra. The galaxy shows only weak metal lines, unlike the luminous *z > 10* population, and departs from the expected size–line strength relation. The most natural reading is low metallicity together with a high escape fraction — which would make faint galaxies like this one efficient contributors to reionization while still early in their chemical enrichment.

</div>
<div class="entry-fig" markdown="1">

{% include figure
   image_path="/assets/fig/mosaic.jpg"
   alt="image"
   caption="NIRCam and MIRI/F770W imaging of JADES-GS-z14-1, unresolved in every band. The 70-hour F770W exposure gives a rest-frame optical flux density of 7.9 ± 2.6 nJy (29.2 mag)."
   width="70%"           %}

{% include figure
   image_path="/assets/fig/spectrum.webp"
   alt="spectrum"
   caption="NIRSpec/PRISM spectrum of JADES-GS-z14-1. The 56-hour exposure shows no emission lines, but a tentative — and puzzling — absorption feature at 2µm."
   width="70%"           %}

</div>
</div>

## Detection of Oxygen Emission from a Galaxy at z=14

<div class="entry-row" markdown="1">
<div class="entry-text" markdown="1">

Helton et al. (2025) [Nature Astronomy, 1-12](https://www.nature.com/articles/s41550-025-02503-z)

The MIRI/F770W detection of JADES-GS-z14-0 (*z = 14*) is blended with a bright foreground galaxy, so the measurement that anchors its rest-frame optical emission is also the hardest one to make. We developed a forward-modeling approach that uses the high-resolution NIRCam imaging to model the source and the contaminant together, then performs exposure-level forced photometry with full propagation of uncertainties and covariances. This yields the F770W flux for the most luminous galaxy known at *z* > 14.  This method can be applied to any MIRI photometry limited by blending.

</div>
<div class="entry-fig" markdown="1">

{% include figure
   image_path="/assets/fig/GS-z14-0.webp"
   alt="miri"
   caption="MIRI/F770W imaging of JADES-GS-z14-0. The foreground galaxy 183349 severely contaminates the measurement."
   width="70%"           %}

</div>
</div>

## Subtraction of Scattered-light Artifacts in JWST Imaging

<div class="entry-row" markdown="1">
<div class="entry-text" markdown="1">

Wu et al. (2026) [*The Astronomical Journal*, 172, 105](https://iopscience.iop.org/article/10.3847/1538-3881/ae8254)

Wisps are among the most severe scattered-light artifacts in JWST/NIRCam, contaminating nearly a quarter of the area in certain detectors, and their morphology changes from exposure to exposure. Therefore, subtraction with a single fixed template may leave noticeable residuals. We developed a data-driven method that models each wisp as a combination of components learned from the data by non-negative matrix factorization (NMF), which captures the morphological variation of wisps. This method is part of the JADES data reduction pipeline and is released as the [NMFwisp](/software/) package.

</div>
<div class="entry-fig" markdown="1">

{% include figure
   image_path="/assets/fig/wisp_model.gif"
   alt="wisp"
   caption="Wisp removal in JWST/NIRCam: the default STScI pipeline correction compared with the NMF-based method."
   width="100"
   class = "align-center" %}

</div>
</div>

## Probing Wandering IMBHs with Quasar Microlensing

<div class="entry-row" markdown="1">
<div class="entry-text" markdown="1">

Wu & Ho (2025) [*The Astrophysical Journal 985, 2*](https://iopscience.iop.org/article/10.3847/1538-4357/adcec3)

Wandering intermediate-mass black holes are essentially invisible on their own, which leaves their population almost unconstrained. We show that microlensing of background quasars offers a way to find them, and that the signal is within reach of the 10-year LSST survey, especially for IMBHs hosting compact star clusters. The lensing magnifies only the emission from scales smaller than the broad-line region, so a lensed quasar should present as a high-Eddington, weak-line source; cosmological peculiar motions then drive slow variability whose amplitude is the same in the ultraviolet, optical, and X-ray. IMBHs embedded in companion clusters produce complex caustic networks and correspondingly distinctive light curves. Each of these signatures is testable against the survey data.

</div>
<div class="entry-fig" markdown="1">

{% include figure
   image_path="/assets/fig/IMBH.webp"
   alt="imbh"
   caption="Caustic network of a 1000 M⊙ black hole at *z* = 1, embedded in a stellar cluster of 30 stars pc⁻²."
   width="30%"           %}

</div>
</div>

## Origin of AGN Radio Jets in Disk Galaxies

<div class="entry-row" markdown="1">
<div class="entry-text" markdown="1">

Wu et al. (2022) [*The Astrophysical Journal 941, 95*](https://iopscience.iop.org/article/10.3847/1538-4357/ac9cd5#back-to-top-target)

Large-scale radio jets are found almost exclusively in giant elliptical galaxies, and it has long been unclear whether morphology itself is what matters. We studied the rare disk galaxies that do host double radio lobes, drawn from the Gems of the Galaxy Zoos project, and found that the apparent preference for ellipticals is better explained as a mass bias: these radio-loud disks carry stellar masses an order of magnitude above typical disks, comparable to giant ellipticals. That two rare properties — extreme stellar mass and a powerful jet — coincide so consistently suggests jet formation is set by mass, and more fundamentally by black hole mass, rather than by the morphology of the host.

</div>
<div class="entry-fig" markdown="1">

{% include figure
   image_path="/assets/fig/radio.webp"
   alt="radio"
   caption="HST image of a radio galaxy with clear disk morphology; white contours show VLA synchrotron emission from the jets."
   width="30%"           %}

</div>
</div>
