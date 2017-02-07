angular.module('humanize', [])
  .filter('humanizeTime', () => (...args) =>
    humanize.time.apply(humanize, args))
  .filter('humanizeDate', (...args) =>
    humanize.date.apply(humanize, args))
  .filter('humanizeNumberFormat', (...args) =>
    humanize.numberFormat.apply(humanize, args))
  .filter('humanizeNaturalDay', (...args) =>
    humanize.naturalDay.apply(humanize, args))
  .filter('humanizeRelativeTime', (...args) =>
    humanize.relativeTime.apply(humanize, args))
  .filter('humanizeOrdinal', (...args) =>
    humanize.ordinal.apply(humanize, args))
  .filter('humanizeFilesize', (...args) =>
    humanize.filesize.apply(humanize, args))
  .filter('humanizeLinebreaks', (...args) =>
    humanize.linebreaks.apply(humanize, args))
  .filter('humanizeNl2br', (...args) =>
    humanize.nl2br.apply(humanize, args))
  .filter('humanizeTruncateChars', (...args) =>
    humanize.truncatechars.apply(humanize, args))
  .filter('humanizeTruncateWords', (...args) =>
    humanize.truncatewords.apply(humanize, args));
