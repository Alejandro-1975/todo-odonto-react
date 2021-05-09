import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'


function DetalleCapacitacion(){
    var {id} = useParams()

    var [curso, setCurso] = useState({})

    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/posts/' +id).then(function(res) {
        return res.json()
}).then(function (item) {
    setCurso(item)
})
    
},[])

return (
    <div>
       
    </div>
)
}

export default DetalleCapacitacion