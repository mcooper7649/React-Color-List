import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import Page from "./Page";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Helmet } from 'react-helmet';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }
  deletePalette(id) {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );
  }
  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
  render() {
    return (
      <div className='App'>
      <Helmet>
      <meta charset="utf-8" data-react-helmet="true" />
          {/* <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" /> */}
          <meta name="title" content="React Utility App | Handy Palette" property="og:title"  data-react-helmet="true" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color"  data-react-helmet="true" />

          <meta name="image" property="og:image" content="https://image.prntscr.com/image/1uT-zq4ORMyfurl9oSmvyw.png"  data-react-helmet="true" />
          <meta name="url" property="og:url" content="https:www.mycodedojo.com"  data-react-helmet="true"/>
          <meta name="description" property="og:description"  content="Handy Palette | Here Is A Handy Tool Thats Great For Development. Whether You Need To Pick A Color Palette With Your Mobile or Computer, Handy Palette Has You Covered. " data-react-helmet="true" />
          <meta name="author" property="og:author" content="Michael Cooper"  data-react-helmet="true"/>

          <meta name="publish_date" property="og:publish_date" content="2021-07-21T00:00:00-0600"  data-react-helmet="true"/>
          <script src="https://kit.fontawesome.com/8cc1b75eb3.js" crossorigin="anonymous"></script>
          <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
          <title>React App | Handy Palette</title>
      </Helmet>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='page' timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path='/palette/new'
                  render={routeProps => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:paletteId/:colorId'
                  render={routeProps => (
                    <Page>
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/'
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:id'
                  render={routeProps => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          
        )} 
      />
      </div>
      
    );
  }
}

export default App;
