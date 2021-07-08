const app_name = 'dndpagemaker'
exports.buildPath = 
function buildPath(route)
{
    console.log(process.env.MONGODB_URI);
    if (process.env.NODE_ENV === 'production') 
    {
        return 'https://' + app_name +  '.herokuapp.com/' + route;
    }
    else
    {        
        //return 'http://localhost:5000/' + route;
        return 'https://' + app_name +  '.herokuapp.com/' + route;
    }
}

