# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Add browser compatibility using Babel and Grunt.

### Changed
- N/A

### Fixed
- N/A

## [1.4.1] - 2020-02-25
### Added
- New language: `dk` Danish [#9](https://github.com/forzagreen/n2words/pull/9)
- New language: `no` Norwegian [#8](https://github.com/forzagreen/n2words/pull/8)
- New language: `cz` Czech [#7](https://github.com/forzagreen/n2words/pull/7)
- New language: `ru` Russian [#6](https://github.com/forzagreen/n2words/pull/6)

### Changed
- CI/CD: use a fake NPM_TOKEN

### Fixed
- Fix 21 in italian : [#4](https://github.com/forzagreen/n2words/issues/4) , [#5](https://github.com/forzagreen/n2words/pull/5)

## [1.3.2] - 2020-02-14
### Fixed
- Capital letter in German: [#2](https://github.com/forzagreen/n2words/issues/2)
- Replace `eval` with `if else` : [#1](https://github.com/forzagreen/n2words/issues/1)
### Changed
- Update `mochajs` test package to `v7.0.1`

## [1.3.1] - 2019-12-28
### Added
- Support for new language: `tr`.
- CI/CD with GitHub Actions.
- `.npmignore`, `.npmrc`, and publish from CI/CD.
### Changed
- Split tests to one file per language
- Update dev packages

## [1.2.0] - 2019-03-23
### Added
- Support for language: `it`.

## [1.1.0] - 2019-03-18
### Added
- Support for languages: `de`, `pt`.

## [1.0.0] - 2019-03-08
### Added
- Started the n2words project.
- Support for languages: `en`, `fr`, `es`.
- Unit test with Mocha and nyc
- Coverage with coveralls and nyc

