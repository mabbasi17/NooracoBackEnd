const  Sliders  =require( './sliders');
const  Actions  =require( './actions');

const mountRouts = (app) => {
	
	app.use('/api/v1/sliders', Sliders);
	app.use('/api/v1/actions' , Actions);

};

module.exports = mountRouts;