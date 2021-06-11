#/
# @license Apache-2.0
#
# Copyright (c) 2021 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# COMMANDS #

# Define whether delete operations should be safe (i.e., deleted items are sent to trash, rather than permanently deleted):
SAFE_DELETE ?= false

# Define the delete command:
ifeq ($(SAFE_DELETE), true)
	# FIXME: -rm -rf
	DELETE := -rm
	DELETE_FLAGS := -rf
else
	DELETE ?= -rm
	DELETE_FLAGS ?= -rf
endif

# VARIABLES #

# Determine the filename:
this_file := $(lastword $(MAKEFILE_LIST))

# Determine the absolute path of the Makefile (see http://blog.jgc.org/2007/01/what-makefile-am-i-in.html):
this_dir := $(dir $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST)))

# Remove the trailing slash:
this_dir := $(patsubst %/,%,$(this_dir))

# Determine root directory:
ROOT_DIR = $(this_dir)

REPORTS_DIR ?= $(ROOT_DIR)/reports

COVERAGE_DIR ?= $(REPORTS_DIR)/coverage

ifndef VERBOSE
	QUIET := @
else
	QUIET :=
endif

# Define the command for `node`:
ifdef NODE
	node := $(NODE)
else
	node := node
endif

# Define the `NODE_PATH` environment variable:
ifdef NODE_PATH
	node_path := $(NODE_PATH)
else
	node_path :=
endif

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.
ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Note: we reference the `bin` file directly in order to support using `istanbul` for code coverage on Windows (https://github.com/gotwarlost/istanbul#usage-on-windows)
JAVASCRIPT_TEST ?= $(NODE_MODULES)/tape/bin/tape

# Define the top-level directory containing node module dependencies:
NODE_MODULES ?= $(ROOT_DIR)/node_modules

# Define the top-level directory containing node module executables:
BIN_DIR ?= $(NODE_MODULES)/.bin

# Define the folder name convention for source files requiring compilation:
SRC_FOLDER ?= src

# Define the folder name convention for documentation files:
DOCUMENTATION_FOLDER ?= docs

# Define the folder name convention for configuration files:
CONFIG_FOLDER ?= etc

# Define the root build directory:
BUILD_DIR ?= $(ROOT_DIR)/build

# Define the path to the `tap-spec` executable.
TAP_REPORTER ?= $(BIN_DIR)/tap-spec

# Define the path to the `tap-summary` executable.
TAP_SUMMARY ?= $(BIN_DIR)/tap-summary

# Define the folder name convention for benchmark files:
BENCHMARKS_FOLDER ?= benchmark

# Define the folder name convention for benchmark fixtures:
BENCHMARKS_FIXTURES_FOLDER ?= $(BENCHMARKS_FOLDER)/fixtures

# Define the folder name convention for examples files:
EXAMPLES_FOLDER ?= examples

# Define the folder name convention for examples fixtures:
EXAMPLES_FIXTURES_FOLDER ?= $(EXAMPLES_FOLDER)/fixtures

# Define the folder name convention for test files:
TESTS_FOLDER ?= test

# Define the folder name convention for test fixtures:
TESTS_FIXTURES_FOLDER ?= $(TESTS_FOLDER)/fixtures

# Define a filepath pattern for benchmark files:
BENCHMARKS_FILTER ?= .*/.*

# Define a filepath pattern for example files:
EXAMPLES_FILTER ?= .*/.*

# Define a filepath pattern for test files:
TESTS_FILTER ?= .*/.*

# Define a filename pattern for benchmark files:
BENCHMARKS_PATTERN ?= benchmark*.js

# Define a filename pattern for example files:
EXAMPLES_PATTERN ?= *.js

# Define a filename pattern for test files:
TESTS_PATTERN ?= test*.js

# Define the command flags:
FIND_BENCHMARKS_FLAGS ?= \
	-type f \
	-name "$(BENCHMARKS_PATTERN)" \
	-path "$(ROOT_DIR)/**/$(BENCHMARKS_FOLDER)/**" \
	-regex "$(BENCHMARKS_FILTER)" \
	$(FIND_BENCHMARKS_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_BENCHMARKS_FLAGS := -regextype posix-extended $(FIND_BENCHMARKS_FLAGS)
endif

# Define a command to list benchmark files:
FIND_BENCHMARKS_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_BENCHMARKS_FLAGS)

# Define the command flags:
FIND_EXAMPLES_FLAGS ?= \
	-type f \
	-name "$(EXAMPLES_PATTERN)" \
	-path "$(ROOT_DIR)/**/$(EXAMPLES_FOLDER)/**" \
	-regex "$(EXAMPLES_FILTER)" \
	$(FIND_EXAMPLES_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_EXAMPLES_FLAGS := -regextype posix-extended $(FIND_EXAMPLES_FLAGS)
endif

# Define a command to list example files:
FIND_EXAMPLES_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_EXAMPLES_FLAGS)

# Common exclude flags that most recipes should use (Note: order does matter to some degree):
FIND_COMMON_EXCLUDE_FLAGS ?= \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \

# Benchmark exclude flags:
FIND_BENCHMARKS_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	-not -path "$(ROOT_DIR)/**/$(BENCHMARKS_FIXTURES_FOLDER)/*"

# Examples exclude flags:
FIND_EXAMPLES_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	-not -path "$(ROOT_DIR)/**/$(EXAMPLES_FIXTURES_FOLDER)/*"

# Tests exclude flags:
FIND_TESTS_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	-not -path "$(ROOT_DIR)/**/$(TESTS_FIXTURES_FOLDER)/*"

# Define the command flags:
FIND_TESTS_FLAGS ?= \
	-type f \
	-name "$(TESTS_PATTERN)" \
	-regex "$(TESTS_FILTER)" \
	$(FIND_TESTS_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_TESTS_FLAGS := -regextype posix-extended $(FIND_TESTS_FLAGS)
endif

# Define a command to list test files:
FIND_TESTS_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_TESTS_FLAGS)

# Define command-line flags for finding test directories for instrumented source code:
FIND_ISTANBUL_TEST_DIRS_FLAGS ?= \
	-type d \
	-name "$(TESTS_FOLDER)" \
	-regex "$(TESTS_FILTER)"

ifneq ($(OS), Darwin)
	FIND_ISTANBUL_TEST_DIRS_FLAGS := -regextype posix-extended $(FIND_ISTANBUL_TEST_DIRS_FLAGS)
endif

# Define the path to the Istanbul executable.
ISTANBUL ?= $(BIN_DIR)/istanbul

# Define which files and directories to exclude from coverage instrumentation:
ISTANBUL_EXCLUDES_FLAGS ?= \
	--no-default-excludes \
	-x 'node_modules/**' \
	-x 'reports/**' \
	-x 'tmp/**' \
	-x 'deps/**' \
	-x 'dist/**' \
	-x "**/$(SRC_FOLDER)/**" \
	-x "**/$(TESTS_FOLDER)/**" \
	-x "**/$(EXAMPLES_FOLDER)/**" \
	-x "**/$(BENCHMARKS_FOLDER)/**" \
	-x "**/$(CONFIG_FOLDER)/**" \
	-x "**/$(DOCUMENTATION_FOLDER)/**"

# Define the command to generate test coverage:
ISTANBUL_COVER ?= $(ISTANBUL) cover

# Define the type of report Istanbul should produce:
ISTANBUL_COVER_REPORT_FORMAT ?= lcov

# Define the command-line options to be used when generating code coverage:
ISTANBUL_COVER_FLAGS ?= \
	$(ISTANBUL_EXCLUDES_FLAGS) \
	--dir $(COVERAGE_DIR) \
	--report $(ISTANBUL_COVER_REPORT_FORMAT)

# Define the command to generate test coverage reports:
ISTANBUL_REPORT ?= $(ISTANBUL) report

# Define the test coverage report format:
ISTANBUL_REPORT_FORMAT ?= lcov

# Define the command-line options to be used when generating a code coverage report:
ISTANBUL_REPORT_FLAGS ?= \
	--root $(COVERAGE_DIR) \
	--dir $(COVERAGE_DIR) \
	--include '**/coverage*.json'

# TARGETS #

#/
# Prints the runtime value of a `Makefile` variable.
#
# ## Notes
#
# -   The rule uses the following format:
#
#     ```bash
#     $ make inspect.<variable>
#     ```
#
# @example
# make inspect.ROOT_DIR
#
# @example
# make inspect.CC
#/
inspect.%:
	$(QUIET) echo '$*=$($*)'

#/
# Runs JavaScript benchmarks consecutively.
#
# ## Notes
#
# -   The recipe assumes that benchmark files can be run via Node.js.
# -   This rule is useful when wanting to glob for JavaScript benchmark files (e.g., run all JavaScript benchmarks for a particular package).
#
#
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/utils/group-by/.*`)
#
# @example
# make benchmark
#
# @example
# make benchmark BENCHMARKS_FILTER=".*/utils/group-by/.*"
#/
benchmark: $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		NODE_ENV="$(NODE_ENV)" \
		NODE_PATH="$(node_path)" \
		$(node) $$file || exit 1; \
	done

.PHONY: benchmark

#/
# Runs JavaScript examples consecutively.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for JavaScript examples files (e.g., run all JavaScript examples for a particular package).
# -   This rule **assumes** that examples files can be run using Node.js.
#
#
# @param {string} [EXAMPLES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
#
# @example
# make examples
#
# @example
# make examples EXAMPLES_FILTER=".*/strided/common/.*"
#/
examples: $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running example: $$file"; \
		NODE_ENV="$(NODE_ENV)" \
		NODE_PATH="$(node_path)" \
		$(node) $$file || exit 1; \
	done

.PHONY: examples

#/
# Runs JavaScript unit tests locally.
#
# This target runs JavaScript unit tests locally.
#/
test: $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r test; do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV="$(NODE_ENV)" \
		NODE_PATH="$(node_path)" \
		$(JAVASCRIPT_TEST) \
			$$test \
		| $(TAP_REPORTER) || exit 1; \
	done

.PHONY: test

#/
# Generates a JavaScript test summary.
#
# This target runs JavaScript unit tests and aggregates TAP output as a test summary.
#/
test-summary: $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r test; do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV="$(NODE_ENV)" \
		NODE_PATH="$(node_path)" \
		$(JAVASCRIPT_TEST) \
			$$test \
		| $(TAP_SUMMARY) || exit 1; \
	done

.PHONY: test-summary

#/
# Runs unit tests and generate a test coverage report.
#/
test-cov: clean-cov
	$(QUIET) NODE_ENV="$(NODE_ENV)" NODE_PATH="$(node_path)" $(MAKE) -f $(this_file) test-istanbul

.PHONY: test-cov

#/
# Remove a coverage directory.
#
# This target cleans up a JavaScript coverage directory by removing it entirely.
#/
clean-cov:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(COVERAGE_DIR)

#/
# Run unit tests and generate a test coverage report.
#
# This target instruments source code, runs unit tests, and outputs a test coverage report.
#/
test-istanbul: $(NODE_MODULES)
	$(QUIET) NODE_ENV="$(NODE_ENV)" \
	NODE_PATH="$(node_path)" \
	$(ISTANBUL_COVER) $(ISTANBUL_COVER_FLAGS) $(JAVASCRIPT_TEST) -- $$( $(FIND_TESTS_CMD) )

.PHONY: test-istanbul
