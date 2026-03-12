import React, { useState } from "react";
import "../styles/CategorySection.css";

function CategorySection({ onSearch }) {

const [openFilter, setOpenFilter] = useState(null)

const [filters, setFilters] = useState({
categoria: [],
marca: [],
ano: [],
motor: [],
preco: []
})

function toggleFilter(filter){
setOpenFilter(openFilter === filter ? null : filter)
}

function toggleOption(filter, value){

setFilters(prev => {

if(filter === "preco"){
return {
...prev,
preco: [value]
}
}

const exists = prev[filter].includes(value)

return{
...prev,
[filter]: exists
? prev[filter].filter(item => item !== value)
: [...prev[filter], value]
}

})

}

function clearFilters(){

setFilters({
categoria: [],
marca: [],
ano: [],
motor: [],
preco: []
})

onSearch()

}

function buildQuery(){

const params = new URLSearchParams()

if(filters.categoria.length > 0){
params.append("categoria", filters.categoria.join(","))
}

if(filters.marca.length > 0){
params.append("marca", filters.marca.join(","))
}

if(filters.ano.length > 0){
params.append("ano", filters.ano.join(","))
}

if(filters.motor.length > 0){
params.append("motor", filters.motor.join(","))
}

if(filters.preco.length > 0){
params.append("preco", filters.preco.join(","))
}

return params.toString()

}


<<<<<<< HEAD
function buscarProdutos(){

const query = buildQuery()

onSearch(query)

=======
async function buscarProdutos(){

try{



const query = buildQuery()

const response = await fetch(
`http://127.0.0.1:8000/api/produtos/?${query}`
)

onSearch(query)

const data = await response.json()

console.log("Produtos filtrados:", data)

/*
OBS:
aqui futuramente você deve
enviar os dados para o componente
que lista produtos
*/

}catch(error){

console.error("Erro ao buscar produtos", error)

}

>>>>>>> e11da5f8d8d3d7f0dafdf40a8a383c78b352e519
}

function Option({filter,value,label}){

const selected = filters[filter].includes(value)

return(

<div
className="option"
onClick={(e)=>{
e.stopPropagation()
toggleOption(filter,value)
}}
>

<input
type="checkbox"
checked={selected}
readOnly
className="inputCheckBoxCategory"
/>

<span>{label || value}</span>


</div>

)

}

return(

<section className="categorySection">

<h2 className="filterTitle">Filtrar Peças</h2>

<div className="filtersContainer">


<div className="filterGroup">

<div
className="customSelect"
onClick={()=>toggleFilter("categoria")}
>

<span>Categoria</span>

<div className={`options ${openFilter === "categoria" ? "open" : ""}`}>

<Option filter="categoria" value="Motor"/>
<Option filter="categoria" value="Freios"/>
<Option filter="categoria" value="Suspensão"/>
<Option filter="categoria" value="Elétrica"/>
<Option filter="categoria" value="Arrefecimento"/>

</div>

</div>

</div>



<div className="filterGroup">

<div
className="customSelect"
onClick={()=>toggleFilter("marca")}
>

<span>Marca do Veículo</span>

<div className={`options ${openFilter === "marca" ? "open" : ""}`}>

<Option filter="marca" value="Ford"/>
<Option filter="marca" value="Chevrolet"/>
<Option filter="marca" value="Volkswagen"/>
<Option filter="marca" value="Fiat"/>
<Option filter="marca" value="Toyota"/>

</div>

</div>

</div>



<div className="filterGroup">

<div
className="customSelect"
onClick={()=>toggleFilter("ano")}
>

<span>Ano</span>

<div className={`options ${openFilter === "ano" ? "open" : ""}`}>

<Option filter="ano" value="2024"/>
<Option filter="ano" value="2023"/>
<Option filter="ano" value="2022"/>
<Option filter="ano" value="2021"/>
<Option filter="ano" value="2020"/>

</div>

</div>

</div>



<div className="filterGroup">

<div
className="customSelect"
onClick={()=>toggleFilter("motor")}
>

<span>Tipo de Motor</span>

<div className={`options ${openFilter === "motor" ? "open" : ""}`}>

<Option filter="motor" value="1.0"/>
<Option filter="motor" value="1.4"/>
<Option filter="motor" value="1.6"/>
<Option filter="motor" value="2.0"/>
<Option filter="motor" value="Diesel"/>

</div>

</div>

</div>


<div className="filterGroup">

<div
className="customSelect"
onClick={()=>toggleFilter("preco")}
>

<span>Preço</span>

<div className={`options ${openFilter === "preco" ? "open" : ""}`}>

<Option filter="preco" value="0-100" label="Até R$100"/>
<Option filter="preco" value="100-300" label="R$100 - R$300"/>
<Option filter="preco" value="300-700" label="R$300 - R$700"/>
<Option filter="preco" value="700-999999" label="R$700+"/>

</div>

</div>

</div>
<br />


<button
className="filterButton"
onClick={buscarProdutos}
>
Buscar Peças
</button>

<button
className="filterButton"
onClick={clearFilters}
>
Limpar filtros
</button>

</div>

</section>

)

}

export default CategorySection