let hl = document.getElementById("headline")
let bucketList = document.getElementById("list")

function changeHeadline(){
    hl.classList.add("hl")
}

function resetHeadline(){
    hl.classList.remove("hl")
}

function secretHeadline(){
    window.close()
}

function styleList(){
    bucketList.classList.add("list")
}