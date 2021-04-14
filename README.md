# next-blob2file
> Blob to file for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-blob2file
```

## usage
```js
import '@jswork/next-blob2file';

fetch('https://dth-beta.alo7.com/alo7/ace/dsr_manager/lATPDhJzv_TUh4_OdTixz85UZwQr.amr')
  .then(res=>res.blob())
  .then(res=>{
    const file = nx.blob2file(res, 'lATPDhJzv_TUh4_OdTixz85UZwQr.amr')
    // File {name: "lATPDhJzv_TUh4_OdTixz85UZwQr.amr", lastModified: 1618309936979, lastModifiedDate: ...
  });
```

## resources
- https://stackoverflow.com/questions/25046301/convert-url-to-file-or-blob-for-filereader-readasdataurl

## license
Code released under [the MIT license](https://github.com/afeiship/next-blob2file/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-blob2file
[version-url]: https://npmjs.org/package/@jswork/next-blob2file

[license-image]: https://img.shields.io/npm/l/@jswork/next-blob2file
[license-url]: https://github.com/afeiship/next-blob2file/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-blob2file
[size-url]: https://github.com/afeiship/next-blob2file/blob/master/dist/next-blob2file.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-blob2file
[download-url]: https://www.npmjs.com/package/@jswork/next-blob2file
