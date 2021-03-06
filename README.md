# Vue Components

## General info
This project is intended to provide components created using Vue.js without CLI

## Table of components
* [Expansion panel](#expansion-panel-)

## Expansion panel <a href="expansion-panel-"></a>
It is a component that allows you to hide and show (toggling betwen them) html content.

<image src="doc/images/expansion-panel.PNG" witdh="100%"/>

### Code Example  
  First, it is needed to import vue
  
  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  ```
  
  Then, import component's files
  
  ```html
  <script src="expansion-panel-section.js"></script>
  <link rel="stylesheet" href="expansion-panel-section.css">
  ```
  
  Then the implementation can be done
  ```html
  <div id="app"> 
     <div class="div-expansion-panel-container">
        <expansion-panel-section label="Section1">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus praesentium exercitationem odio! Nihil nostrum nam vel ea quos aut </p>
        </expansion-panel-section>

        <expansion-panel-section label="Section2">
                <div class="table-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Label name</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Label1</td>
                            <td>Yellow</td>
                          </tr>
                          <tr>
                            <td>Label2</td>
                            <td>Red</td>
                          </tr>
                        </tbody>
                    </table>
                </div>
        </expansion-panel-section>
  </div>
  ```
  
  Notice, a Vue object (app) must exist and the *expansion-panel-section* receives label property and html can be written inside this tag.
