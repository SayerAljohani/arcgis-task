const Status = {
    available: 'Available',
    sale: 'Sale',
    rented: 'Rented',
    booked: 'Booked'
}

const remoteGisDataURl ='https://api.npoint.io/25464e559c40a2909c25'

// This is for local test 
// you can load data from external url such as 'https://api.npoint.io/25464e559c40a2909c25' 

var jsDemoListOfPoints = [
    {
        latitude: 24.63742980661609,
        longitude: 46.71662307244889,
        popup: {
            name: 'point 1',
            status: Status.available,
            date: '2022-01-06'
        }
    },
    {
        latitude: 24.63852203988814,
        longitude: 46.71837401862483,
        popup: {
            name: 'point 2',
            status: Status.available,
            date: '2022-09-01'
        }
    },
    {
        latitude: 24.63881313793275,
        longitude: 46.71432710153195,
        popup: {
            name: 'point 3',
            status: Status.available,
            date: '2022-03-01'
        }
    },
    {
        latitude: 24.639294399050954,
        longitude: 46.71618533606861,
        popup: {
            name: 'point 4',
            status: Status.rented,
            date: '2022-07-01'
        }
    },
    {
        latitude: 24.640394417565457,
        longitude: 46.711164240792606,
        popup: {
            name: 'point 5',
            status: Status.rented,
            date: '2022-04-01'
        }
    },
    {
        latitude: 24.640111612319828,
        longitude: 46.71416402374785,
        popup: {
            name: 'point 6',
            status: Status.sale,
            date: '2022-01-01'
        }
    }

]