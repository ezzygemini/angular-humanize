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
    humanize.truncatewords.apply(humanize, args))
  .filter('humanizeNum', (number = 0, precision = 1) => {
    if (number === 0) {
      return 0;
    }
    if (number > -1 && number < 1) {
      return number.toFixed(precision);
    }
    let suffixIndex = Math.floor(Math.log(Math.abs(number)) / Math.log(1000));
    let value = number / Math.pow(1000, suffixIndex);
    return value.toFixed(precision) +
      ['', 'k', 'M', 'B', 'T', 'Q'][suffixIndex];
  });
