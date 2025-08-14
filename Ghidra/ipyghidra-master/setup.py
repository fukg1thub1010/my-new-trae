from distutils.core import setup

import sys

setup(
    name="ipyghidra",
    version="1.0",
    description="Extension for IPython to start ghidra_bridge with some extra features",
    author="Florian Magin",
    url="none",
    packages=["ipyghidra"],
    install_requires=["ghidra_bridge", "ipython", "attr", "cattrs-3.8" if sys.version_info >= (3, 8) else "cattrs"],
)
