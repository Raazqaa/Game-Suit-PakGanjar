// pilihan computer
function getPilihanComp(){
    const comp = Math.random();
    if(comp < 0.34 ) return 'gunting'
    if(comp >= 0.34 && comp < 0.67) return 'batu';
    return 'kertas';
} 

// Aturan Main

function getHasil(comp, player){
    if(player == comp) return 'Kalian Seri!!'
    if(player == 'gunting') return ( comp == 'kertas') ? 'Kamu Menang!! Wahai Anak Mudaa!!' : 'Kamu Kalah!! DASAARR PEMBOKEEPP!!';
    if(player == 'batu') return ( comp == 'gunting') ? 'Kamu Menang!! Wahai Anak Mudaa!!' : 'Kamu Kalah!! DASAARR PEMBOKEEPP!!';
    if(player == 'kertas') return ( comp == 'batu') ? 'Kamu Menang!! Wahai Anak Mudaa!!' : 'Kamu Kalah!! DASAARR PEMBOKEEPP!!';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gunting', 'batu', 'kertas'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
    if( new Date().getTime() - waktuMulai > 1000 ) {
    clearInterval;
    return;
    }
    imgComputer.setAttribute('src', 'image/' + gambar[i++] + '.png');
    if( i == gambar. length ) i = 0;
    }, 100)
}

// function putar (){

//     const imgComputer = document.querySelector('.img-komputer');
//     const gambar = ['gunting', 'batu', 'kertas'];
//     let i = 0;
//     const waktuMulai = new Date().getTime();
//     setInterval(function(){
//         if( newdate().getTime() - waktuMulai > 1000 ){
//             clearInterval;
//             return;
//         }
//         imgComputer.setAttribute('src', 'image/', + gambar[i++] + '.png');
//         if( i == gambar.length ) i = 0;
//     }, 100)
// }



//  Mengambil click pada gambar ( cara Pendek )
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComp();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer)

        putar();
        
        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer')
            imgComputer.setAttribute('src','image/' + pilihanComputer + '.png')
        
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        
           
            if(hasil === 'Kamu Menang!! Wahai Anak Mudaa!!'){
                const ganjar = document.querySelector('.ganjar');
                ganjar.setAttribute('src','image/' +'kalah' + '.jpg')
            }else if (hasil === 'Kalian Seri!!'){
                const ganjar = document.querySelector('.ganjar');
                ganjar.setAttribute('src','image/' +'seri' + '.jpg')
            }else if( hasil === 'Kamu Kalah!! DASAARR PEMBOKEEPP!!' ){
                const ganjar = document.querySelector('.ganjar');
                ganjar.setAttribute('src','image/' +'menang' + '.jpg')
            }
        }, 1000);
    });
    
});



// // Mengambil click pada gambar ( cara Panjang )

// const pGunting = document.querySelector('.gunting')
// pGunting.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComp();
//     const pilihanPlayer = pGunting.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer)

//     putar();
        
//         setTimeout(function() {
//             const imgComputer = document.querySelector('.img-komputer')
//             imgComputer.setAttribute('src','image/' + pilihanComputer + '.png')
        
//             const info = document.querySelector('.info');
//             info.innerHTML = hasil;
        
           
//             if(hasil === 'Kamu Menang!!'){
//                 const ganjar = document.querySelector('.ganjar');
//                 ganjar.setAttribute('src','image/' +'kalah' + '.jpg')
//             }else if (hasil === 'Kalian Seri!!'){
//                 const ganjar = document.querySelector('.ganjar');
//                 ganjar.setAttribute('src','image/' +'seri' + '.jpg')
//             }else{
//                 const ganjar = document.querySelector('.ganjar');
//                 ganjar.setAttribute('src','image/' +'menang' + '.jpg')
//             }
//         }, 1000);
    
// } );

// const pBatu = document.querySelector('.batu')
// pBatu.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComp();
//     const pilihanPlayer = pBatu.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer)

//     putar();
        
//         setTimeout(function() {
//             const imgComputer = document.querySelector('.img-komputer')
//             imgComputer.setAttribute('src','image/' + pilihanComputer + '.png')
        
//             const info = document.querySelector('.info');
//             info.innerHTML = hasil;
        
           
//             if(hasil === 'Kamu Menang!!'){
//                 const ganjar = document.querySelector('.ganjar');
//                 ganjar.setAttribute('src','image/' +'kalah' + '.jpg')
//             }else if (hasil === 'Kalian Seri!!'){
//                 const ganjar = document.querySelector('.ganjar');
//                 ganjar.setAttribute('src','image/' +'seri' + '.jpg')
//             }else{
//                 const ganjar = document.querySelector('.ganjar');
//                 ganjar.setAttribute('src','image/' +'menang' + '.jpg')
//             }
//         }, 1000);
// } );

// const pKertas = document.querySelector('.kertas')
// pKertas.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComp();
//     const pilihanPlayer = pKertas.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer)

//     putar();
        
//     setTimeout(function() {
//         const imgComputer = document.querySelector('.img-komputer')
//         imgComputer.setAttribute('src','image/' + pilihanComputer + '.png')
    
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
    
       
//         if(hasil === 'Kamu Menang!!'){
//             const ganjar = document.querySelector('.ganjar');
//             ganjar.setAttribute('src','image/' +'kalah' + '.jpg')
//         }else if (hasil === 'Kalian Seri!!'){
//             const ganjar = document.querySelector('.ganjar');
//             ganjar.setAttribute('src','image/' +'seri' + '.jpg')
//         }else{
//             const ganjar = document.querySelector('.ganjar');
//             ganjar.setAttribute('src','image/' +'menang' + '.jpg')
//         }
//     }, 1000);
// } );


