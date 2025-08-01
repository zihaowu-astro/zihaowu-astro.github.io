---
title: "Research"
permalink: /research/
layout: splash
---
## JADES-GS-z14-1

Wu et al. (2025) [arXiv:2507.22858](https://arxiv.org/abs/2507.22858)

I led the analysis of extremely deep JWST observations of JADES-GS-z14-1, one of the most distant galaxies spectroscopically confirmed at *z = 13.86*. I discovered that this galaxy is serendipitously located in the overlapping region of two JADES MIRI parallel pointings, yielding a combined exposure time of 70 hours, the deepest MIRI observation of any high-redshift galaxy to date. Together with 56 hours of NIRSpec/Prism spectroscopy and 16-band deep NIRCam imaging, we are able to study this faint galaxy in detail for the first time.

To enable robust flux measurements under low signal-to-noise conditions, I performed advanced model-fitting photometry directly on individual exposures in both NIRCam and MIRI, incorporating exposure-level noise properties and local background marginalization. I also conducted a detailed analysis of the NIRSpec prism data that accounts for inter-channel covariance, ensuring accurate measurement of faint spectral features.

Our analysis reveals that this low-luminosity galaxy has weak metal emission lines, in stark contrast to the strong emission lines observed in more luminous *z > 10* objects.  It also challenges the expected relation between galaxy size and line emission strength. These results suggest that compact, low-luminosity galaxies in the early Universe may have lower metallicity and potentially a high escape fraction, with important implications for understanding chemical enrichment and the role of faint galaxies in driving cosmic reionization.

{% include figure
   image_path="/assets/fig/mosaic.pdf"
   alt="image"
   caption="Fig. 1 JWST NIRcam and MIRI/F770W images of JADES-GS-z14-1.  The MIRI/F770W image have 70 hours of total exposure, the deepest observation for any high-redshift galaxies. The NIRCam images have 16 bands with exposure time > 6 hours in each band. JADES-GS-z14-1 is extremely compact and not resolved in all bands. The MIRI/F770W observation reveals a rest-frame optical flux density of 7.9 ± 2.6 nJy (29.2 mag)."
   width="70%"           %} 

{% include figure
   image_path="/assets/fig/spectrum.png"
   alt="spectrum"
   caption="Fig. 2 JWST NIRSpec/PRISM spectrum of JADES-GS-z14-1. The 56 hours of observation reveals no emission lines but a tentative (and puzzling) absorption feature at 2µm."
   width="70%"           %} 

## JADES-GS-z14-0

Helton et al. (2025) [*Nature Astronomy, 1-12*](https://www.nature.com/articles/s41550-025-02503-z)

I develop advanced techniques for high-precision measurements of faint galaxies in the early universe. I developed an advanced linear algorithm to disentangle the MIRI emission of JADES-GS-z14-0 from a foreground contaminant, leveraging the higher-resolution spatial information from NIRCam to model the MIRI source structure. The method performs forced photometry on individual exposures while rigorously propagating uncertainties and covariances, which are critical for reliable flux estimation especially in heavily contaminated situations. This technique has proven accurate and robust, and provided the critical measurement of the MIRI/F770W flux for JADES-GS-z14-0, an extraordinary galaxy at *z = 14*.

{% include figure
   image_path="/assets/fig/GS-z14-0.png"
   alt="miri"
   caption="Fig. 3 JWST MIRI/F770W images of JADES-GS-z14-0. The foreground galaxy labeled 183349 introduces severe flux contamination to the measurement of JADES-GS-z14-0."
   width="70%"           %} 



## JWST Wisp Subtraction 

Wu et al. in prep. 

I developed a data-driven method to remove *wisp*, a severe and widespread scattered-light artifact in JWST NIRCam data, using the non-negative matrix factorization (NMF) algorithm. This technique has been successfully integrated into the latest JADES data reduction pipeline, substantially enhancing the reliability of faint source detection in corresponding regions.

{% include figure
   image_path="/assets/fig/wisp_model.gif"
   alt="wisp"
   caption="Fig. 4  Removal of scattered-light artifacts known as wisps in JWST NIRCam images. Shown are comparisons between the default STScI pipeline correction and our improved method based on non-negative matrix factorization (NMF)."
   width="100"
   class = "align-center" %} 

## Intermediate-Mass Black Holes (IMBHs)

Wu & Ho (2025) [*The Astrophysical Journal 985, 2*](https://iopscience.iop.org/article/10.3847/1538-4357/adcec3)

IMBHs are too faint to detect through their electromagnetic emissions. I proposed a method to detect their gravitational lensing effects on background quasars. IMBH microlensing selectively magnifies emissions inside the broad line region of quasars, causing them to appear as high-Eddington, weak-line quasars. Cosmological peculiar motions introduce long-term lensing-induced variability, with the same amplitude across ultraviolet, optical, and X-ray wavelengths. IMBHs embedded within companion stellar clusters can generate complex caustic structures, leading to distinctive and highly variable quasar light curves.

{% include figure
   image_path="/assets/fig/IMBH.png"
   alt="imbh"
   caption="Fig. 5 Caustic structures produced by an intermediate-mass black hole with a mass of 1000 M⊙ at redshift *z* = 1, embedded in a stellar cluster with a surface density of 30 stars per square parsec."
   width="30%"           %} 

## Origin of Black Hole Jet

Wu et al. (2022) [*The Astrophysical Journal 941, 95*](https://iopscience.iop.org/article/10.3847/1538-4357/ac9cd5#back-to-top-target)

It has long been a puzzle why large-scale black hole jets, seen as radio lobes, are almost exclusively associated with elliptical galaxies. To investigate this, I studied a rare sample of disk galaxies hosting radio lobes from the Gems of the Galaxy Zoos project. Our analysis reveals that the apparent preference for elliptical hosts is primarily a consequence of a mass bias: using HST imaging, we confirmed that these galaxies show clear disk morphologies, yet they have exceptionally high stellar masses—on average, an order of magnitude above the characteristic mass for disk galaxies, similar to that of gaint elliptical galaxies instead. Given the rarity of both massive disk galaxies and jet producing events, our results suggest that the formation of black hole jets may be fundamentally linked to the stellar mass of the host galaxy. Since stellar mass correlates with black hole mass, this further implies a potential connection between jet production and black hole mass.

{% include figure
   image_path="/assets/fig/radio.png"
   alt="radio"
   caption="Fig. 6 Hubble Space Telescope image of a radio galaxy with clear disk morphology. White contours indicate synchrotron emission strength from black hole jets, as observed with the Very Large Array telescope."
   width="30%"           %} 
