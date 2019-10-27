# pdf-slide-html

Generator cli for [azu/slide-pdf.js](https://github.com/azu/slide-pdf.js "azu/slide-pdf.js").

## Installation

```
npm install --global pdf-slide-html
```

## Usage

```
$ pdf-slide-html --help
Usage:pdf-slide-html [options]

  -h, --help           displays help
  --slide-url String   slide url
  --base-url String    slide-pdf.js base-url
  --pdf-url String     pdf file path
  --markdown String    markdown file path
  -o, --output String  output file path

Version 1.0.1
```

### Example

```
pdf-slide-html --slide-url https://azu.github.io/slide/DOMQuery/sourcemap.html --pdf-url https://azu.github.io/slide/DOMQuery/sourcemap.pdf --base-url https://azu.github.io/slide-pdf.js/ --markdown ./example/sourcemap.md -o example/index.html
# => index.html
```

Result : http://azu.github.io/slide/DOMQuery/index.html

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT