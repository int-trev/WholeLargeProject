const app_name = 'dndpagemaker'
exports.buildPath = 
function buildPath(route)
{
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') 
    {
        return 'https://' + app_name +  '.herokuapp.com/' + route;
    }
    else
    {        
        return 'http://localhost:5000/' + route;
    }
}

