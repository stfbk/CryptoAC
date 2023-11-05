# Configuration file for the Sphinx documentation builder.

# -- Project information
project = 'CryptoAC'
copyright = '2023, Fondazione Bruno Kessler'
author = 'Stefano Berlato'

release = '0.1'
version = '0.1.0'

# -- General configuration
extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.autosectionlabel',
    'sphinx_rtd_theme',
    #'sphinxcontrib.openapi',
    'sphinx_toolbox.collapse'
]

# -- Exclude the following files
exclude_patterns = ['roadmap/*', 'research/*']

# -- Options for HTML output
html_theme = 'sphinx_rtd_theme'
html_logo = "CryptoAC.png"
html_theme_options = {
    'logo_only': True,
    'display_version': False,
}

html_theme_options = {
    'navigation_depth': 4,
    'collapse_navigation': False
}

# -- Options for EPUB output
epub_show_urls = 'footnote'