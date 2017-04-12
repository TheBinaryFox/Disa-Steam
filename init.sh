#!/usr/bin/env bash
# -----------------------------------------------------------------------------
PROJECT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# -----------------------------------------------------------------------------
# Functions.
relink() {
	if [ -L "$2" ]; then
		unlink "$2"
	fi

	ln -s "$1" "$2"
}

# -----------------------------------------------------------------------------
# Initialize submodules if not already initalized.
cd "${PROJECT}"
if ! [ -e "${PROJECT}/submodules/DisaOpenSource/.git" ]; then
	printf "Initializing submodules..."
	git submodule init
	git submodule update
fi

# -----------------------------------------------------------------------------
# Link submodule /packages directory to local one.
cd "${PROJECT}"
printf "Generating symbolic links...\n"
relink "${PROJECT}/packages" "${PROJECT}/submodules/DisaOpenSource/packages"

