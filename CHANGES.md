# tacks

## v1.2.4 2017-02-17

* Don't consider the final slash meaningful when comparing path names for equality.

## v1.2.3 2017-02-17

* Strip off Windows drive letter absolutes when creating symlinks just as we do
  with `/`.
* Consistently use unix-style path separators on Windows.

## v1.2.2 2016-09-19

* Added repo info to package.json. Thank you @watilde!

## v1.2.1 2016-04-22

* Lots of internal-only refactoring/rewriting to simplify future additions.

## v1.2.0 2016-04-20

* Add tap comparer for tacks objects

## v1.1.0 2016-04-19

* Add new Symlink entry type

## v1.0.0 2016-01-26

* Initial release