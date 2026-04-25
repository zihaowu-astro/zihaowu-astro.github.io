---
title: "Research"
permalink: /research/
layout: splash
---
## JADES-ODz10

Wu et al. (2026) [arXiv:2601.15960](https://arxiv.org/abs/2601.15960)

I discover a candidate galaxy overdensity at *z ≈ 10.5*, just 500 Myr after the Big Bang, comprising 18 galaxies with consistent photometric redshifts within 8 comoving Mpc. The galaxy number density is four times higher than the field expectation, accounting for 30% of the bright galaxy population and 50% of the total star formation activity at *10 < z < 12* in the JADES GOODS-S field. The observed abundance significantly exceeds predictions from cosmological simulations such as TNG100. 

{% include figure
   image_path="/assets/fig/overdensity.webp"
   alt="image"
   caption="Spatial distribution of galaxy candidates at 10 < z_phot < 12 from the JADES photometric sample, color-coded by photometric redshift derived with the EAZY package. Large circles mark bright sources with F356W fluxes above 8 nJy (29.1 AB mag); small circles mark sources between 5 and 8 nJy. The bold black polygon outlines the JADES/NIRCam GOODS–S footprint in F115W. Hatched regions indicate shallow F115W coverage; all other areas within the footprint reach a point-source depth of 8 nJy at > 7σ significance. Contours show the estimated density field at the mean density and 1σ, 2σ, 3σ, and 4σ above the mean density of bright sources. The overdensity is on the west side of the field, with a peak galaxy number density exceeding four times the mean.  North is up, and east is to the left."
   width="80%"           %} 

## JADES-GS-z14-1

Wu et al. (2025) [*The Astrophysical Journal*, 992, 212](https://iopscience.iop.org/article/10.3847/1538-4357/ae01a1)

I lead the analysis of ultra-deep JWST observations of JADES-GS-z14-1 (*z = 13.86*). I discover that it lies in a small overlapping region of JADES MIRI observations and thus fortuitously has a 70-hour exposure—the deepest MIRI observation for any galaxy at high redshift. Combined with newly obtained 56 hours of NIRSpec/Prism spectroscopy and 16-band NIRCam imaging, this dataset enables an unprecedentedly detailed study of a faint galaxy in the early Universe.

To extract robust measurements at low signal-to-noise, I developed exposure-level model-fitting photometry for NIRCam and MIRI and performed a covariance-aware analysis of the NIRSpec prism spectra. I find that this low-luminosity galaxy shows weak metal emission lines, in contrast to more luminous *z > 10* galaxies, and deviates from expected size–line strength trends. These results suggest lowemetallicity and potentially high escape fractions in faint early galaxies, with important implications for chemical enrichment and cosmic reionization.

{% include figure
   image_path="/assets/fig/mosaic.jpg"
   alt="image"
   caption="Fig. 1 JWST NIRcam and MIRI/F770W images of JADES-GS-z14-1.  The MIRI/F770W image have 70 hours of total exposure, the deepest observation for any high-redshift galaxies. The NIRCam images have 16 bands with exposure time > 6 hours in each band. JADES-GS-z14-1 is extremely compact and not resolved in all bands. The MIRI/F770W observation reveals a rest-frame optical flux density of 7.9 ± 2.6 nJy (29.2 mag)."
   width="70%"           %} 

{% include figure
   image_path="/assets/fig/spectrum.webp"
   alt="spectrum"
   caption="Fig. 2 JWST NIRSpec/PRISM spectrum of JADES-GS-z14-1. The 56 hours of observation reveals no emission lines but a tentative (and puzzling) absorption feature at 2µm."
   width="70%"           %} 

## JADES-GS-z14-0

Helton et al. (2025) [Nature Astronomy, 1-12](https://www.nature.com/articles/s41550-025-02503-z)

I contribute to the key photometric measurement for JADES-GS-z14-0 (*z = 14*). I develop a forward-modeling method to perform accurate photometry in heavily contaminated situation. This method leverages high-resolution NIRCam imaging to model the source structure and disentangle the MIRI emission from a foreground contaminant, performing exposure-level forced photometry with full propagation of uncertainties and covariances. This approach delivers the critical MIRI/F770W flux measurement for this extraordinary galaxy.

{% include figure
   image_path="/assets/fig/GS-z14-0.webp"
   alt="miri"
   caption="Fig. 3 JWST MIRI/F770W images of JADES-GS-z14-0. The foreground galaxy labeled 183349 introduces severe flux contamination to the measurement of JADES-GS-z14-0."
   width="70%"           %} 



## JWST Wisp Subtraction 

Wu et al. (2026) [arXiv:2601.15958 (2026)](https://arxiv.org/abs/2601.15958)

I developed a data-driven method to remove wisp artifacts using the non-negative matrix factorization (NMF) algorithm. Wisp is one of the most severe scattered-light artifacts in JWST NIRCam data, contanimating nearly 1/4 area in certain detectors. This technique has been successfully integrated into the JADES data reduction pipeline, with substantial improvements compared with existing methods..

{% include figure
   image_path="/assets/fig/wisp_model.gif"
   alt="wisp"
   caption="Fig. 4  Removal of scattered-light artifacts known as wisps in JWST NIRCam images. Shown are comparisons between the default STScI pipeline correction and our improved method based on non-negative matrix factorization (NMF)."
   width="100"
   class = "align-center" %} 

## Intermediate-Mass Black Holes (IMBHs)

Wu & Ho (2025) [*The Astrophysical Journal 985, 2*](https://iopscience.iop.org/article/10.3847/1538-4357/adcec3)

Wandering IMBHs are usally too faint to detect. I find that their gravitational lensing effects on background quasars are detectable in the 10-year LSST survey, especially if the IMBHs host compact star clusters. IMBH microlensing magnifies emissions on scales smaller than the broad line region of quasars, causing them to appear as high-Eddington, weak-line quasars. Cosmological peculiar motions introduce long-term lensing-induced variability, with the same amplitude across ultraviolet, optical, and X-ray wavelengths. IMBHs embedded within companion stellar clusters can generate complex caustic structures, leading to distinctive and highly variable quasar light curves.

{% include figure
   image_path="/assets/fig/IMBH.webp"
   alt="imbh"
   caption="Fig. 5 Caustic structures produced by an intermediate-mass black hole with a mass of 1000 M⊙ at redshift *z* = 1, embedded in a stellar cluster with a surface density of 30 stars per square parsec."
   width="30%"           %} 

## Origin of Black Hole Jet

Wu et al. (2022) [*The Astrophysical Journal 941, 95*](https://iopscience.iop.org/article/10.3847/1538-4357/ac9cd5#back-to-top-target)

It has long been a puzzle why large-scale black hole jets are predominantly found in gaintly elliptical galaxies. I study a sample of disk galaxies with radio lobes from the Gems of the Galaxy Zoos project. Our analysis reveals that the preference for elliptical hosts is likely a consequence of a mass bias: these rare radio disk galaxies have stellar masses an order of magnitude above typical disks, comparable to giant ellipticals. The coincidence of two rare properties—extreme mass and powerful jets—may suggest that the formation of large-scale jets requires high stellar mass, or more fundamentally, back hole mass, given their correlation.

{% include figure
   image_path="/assets/fig/radio.webp"
   alt="radio"
   caption="Fig. 6 Hubble Space Telescope image of a radio galaxy with clear disk morphology. White contours indicate synchrotron emission strength from black hole jets, as observed with the Very Large Array telescope."
   width="30%"           %} 
