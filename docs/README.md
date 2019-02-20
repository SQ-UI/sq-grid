# SQ-Grid

A simple and clean CSS grid which can be configured to use either CSS Grid or Flexbox.
SQ-Grid is part of the SQ-UI components group.

See a combined live preview [here](https://sq-ui.github.io/sq-grid/examples/grid.html)

## Installation
1. Install the package:
`npm install @sq-ui/sq-grid`
2. Import whatever you need:
```
./node_modules/@sq-ui/sq-grid/dist/sq-grid.css
./node_modules/@sq-ui/sq-grid/mixins.scss
./node_modules/@sq-ui/sq-grid/sq-grid.scss
```

## Local Development
1. Clone the repository
2. Run `npm install`
3. After you modify either of the scss files, you would need to run:
`npm run build:sass`

## Types of grid implementations

SQ-Grid offers three types of grids:

- CSS Grid-based
- Flexbox-based
- Float-based

The grid which the browser should use is determined by <b>@supports</b> queries. In case the browser supports either native CSS grids or flexbox, the UI kit exposes class rules which the developer can use to manipulate the grid according to either grid or flexbox rules.

In case the browser doesn't support either of those two features, the UI kit defaults to using floats to establish the grid rules.

## Configuration

Provided variables for grid manipulation:

- <b>$columns</b> - The number of columns to be used by the grid. Defaults to 12.
- <b>$columnGap</b> - The space between each column. Defaults to 10px;
- <b>$rowGap</b> - The space between each row. Defaults to 20px;

## Usage

The grid uses a maximum of 12 columns per row. All the width calculations and corresponding classes are based on the 12-column layout.

### <b>.sq-grid</b>

The parent which wraps the grid columns. By default, it does not contain any CSS rules.

### <b>(.sq-grid).css-grid</b>

This is an additional class to .sq-grid which enables the usage of the native CSS grid feature.

```html
 <div class="sq-grid css-grid">
    <div class="col">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div class="col">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div class="col">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
</div>
```

You can see live example here: [CSS Grid Example](https://sq-ui.github.io/sq-grid/examples/css-grid.html)

### <b>(.sq-grid).css-flexbox</b>

An additional class to .sq-grid. It enables the flexbox implementation of the grid system.

```html
<div class="sq-grid css-flexbox">
    <div class="col">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div class="col">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div class="col">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
</div>
```

You can see live example here: [CSS Flexbox Example](https://sq-ui.github.io/sq-grid/examples/flexbox-grid.html)

### <b>(.sq-grid).auto-col-width</b>

An additional class to .sq-grid. When this class is added, the columns width is calculated automatically (based on 12-column layout).

```html
<div class="sq-grid css-grid auto-col-width">
    <div class="col">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div class="col">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div class="col">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
</div>
```

You can see live example here: [Auto col width Example](https://sq-ui.github.io/sq-grid/examples/auto-col-width.html)

### <b>.col</b>

The class for every child of the .sq-grid container. Represents a single column of the grid.

### <b>(.col).span-{< number >, where < number > can be an integer between 1 and 12}</b>

An additional class to .col. It can be used to manually set the width of box. For example, .col.span-4 would mean that the box would span 4 columns.

```html
<div class="sq-grid css-grid example-code">
    <div class="col span-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div class="col span-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div class="col span-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
</div>
```

You can see live examples here: [CSS and Flexbox based grid](https://sq-ui.github.io/sq-grid/examples/specific-width.html)
