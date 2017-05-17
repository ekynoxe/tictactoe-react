# tictactoe-react
A simple react implementation of a tic tac toe game.
This game has been developed on OSX sierra, as a `rack` application for a simple 'static' deployment on Heroku.

## Requirements
### Runtime
- Ruby 2.4.x
- rack gem

### Build
- bundler gem
- NodeJs 6.9.x
- npm or yarn

## Install
Install ruby (2.4.1 was the stable version at the time of writing). I use rvm but use the method you prefer:

`rvm install 2.4.1`

Clone the repository, then install the required gems to run the rack application:

`git clone https://github.com/ekynoxe/tictactoe-react.git`

`gem install bundler` (if you don't have it installed yet)

`bundle install`

Install node JS 6.9.x and yarn (or npm as you please) with the method of your choosing. I use a mix of brew (I'm on OSX) and then nvm.

`nvm install 6.9.2`
`yarn install`

Once this is done, build the javascript bundle with:

`yarn run build`

Then you can run the app:

`rackup` or `yarn start`

You can access the game at http://localhost:9292

## Development
To run a watch task that will recompile the front-end bundle while running the rack web server, use:

`yarn run dev`
