# Requirements

### General requirements
- Front-end to avoid writing full-on server logic and routes etc for the single player game
  - react
  - redux to keep state
  - simple rack application, no need for even sinatra or the like
- Game algorithm (minimax) to be implemented
- Works with mouse and touch events
- Testing of some game states with Jest and actions/reducers with mocha
- Page can be reloaded without losing the current game
  - Use local storage for game state
  - Game state can be fed into machine algorithm as a start state
- Randomly select one player to start for multiplayer games.
- Responsive visual grid, up to a maximum size defined in CSS.
- Webpack to bundle assets (or Browserify, but it seems webpack is well in fashion too)
- Deploy somewhere:
  - Heroku
  - Openshift
  - Static pages
    - S3
    - Github pages
    - Personal site demos page?
  - Not worrying about deployment size for now, all files *could* be sent

### Multiplayer
- Keep current game stored somewhere accessible to both players or keep in sync through turn process.
- Match players in a waiting queue
- Cross players communication and state sharing
  - Through server API -> would need a server for it
  - Web sockets -> Firebase is still active (bought by google), so could investigate that
