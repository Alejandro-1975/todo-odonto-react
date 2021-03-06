import {useState} from 'react'


function SearchItems() {
  var [search, setSearch] = useState('')
  var [results, setResults] = useState([])

  var options = [
    'Electrodomesticos', 'Instrumentos musicales', 'Moda', 'Deporte', 'Computacion', 'Mascotas', 'Hogar',
  ]

  function getOptions (e) {
    if (e.target.value.length == 0) {
      setSearch(e.target.value)
      setResults([])
      return
    }

    setSearch(e.target.value)

    var resultados = options.filter(function (option) {
      return option.includes(e.target.value)
    })

    setResults(resultados)
  }

  return (
    <>
      

      <div className="App-navigation">
        <p>Mostrando resultados de busqueda para {search}</p>
        <input name="search" value={search} onInput={(e) => getOptions(e)} />
        
        <div>
          {
            results.map((result, i) => {
              return <div key={i}>{result}</div>
            })
          }
        </div>
      </div>

     
    </>
  );
}

export default SearchItems;