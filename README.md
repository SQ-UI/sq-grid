# sq-grid

A simple and clean CSS grid which can be configured to use either CSS Grid or Flexbox.

See a combined live preview [here](https://sq-ui.github.io/sq-grid/examples/grid.html)

> Documentation can be found [here](https://sq-ui.github.io/sq-grid/)

## Types of grid implementations

SQ-Grid offers three types of grids:

- [CSS Grid-based](https://sq-ui.github.io/sq-grid/examples/css-grid.html)
- [Flexbox-based](https://sq-ui.github.io/sq-grid/examples/flexbox-grid.html)
- Float-based

The grid which the browser should use is determined by @supports queries. In case the browser supports either native CSS grids or flexbox, the UI kit exposes class rules which the developer can use to manipulate the grid according to either grid or flexbox rules. In case the browser doesn't support either of those two features, the UI kit defaults to using floats to establish the grid rules.

## Usage

The grid uses a maximum of 12 columns per row. All the width calculations and corresponding classes are based on the 12-column layout.

The grid consists of the following classes:

- <b>.sq-grid</b> - The parent which wraps the grid columns. By default, it does not contain any CSS rules.
- <b>(.sq-grid).css-grid</b> - This is an additional class to .sq-grid which enables the usage of the native CSS grid feature.
- <b>(.sq-grid).css-flexbox</b> - An additional class to .sq-grid. It enables the flexbox implementation of the grid system.
- <b>(.sq-grid).auto-col-width</b> - An additional class to .sq-grid. When this class is added, the columns width is calculated automatically (based on 12-column layout).
- <b>.col</b> - The class for every child of the .sq-grid container. Represents a single column of the grid.
- <b>(.col).span-{<number\>, where <number\> can be an integer between 1 and 12}</b> - An additional class to .col. It can be used to manually set the width of box. For example, .col.span-4 would mean that the box would span 4 columns.
