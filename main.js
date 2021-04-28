const head1 = document.getElementById('corona_update_1');
const head2 = document.getElementById('corona_update_2');
const head3 = document.getElementById('corona_update_3');
const head4 = document.getElementById('corona_update_4');

const submit = document.getElementById('Covid19-update-section');
// const submit = document.getElementsByTagName("BODY")[0];

const getinfo = async(event) =>{
    event.preventDefault();
    try{
        let url = 'https://api.covid19api.com/summary';
        const response = await fetch(url);
        const data = await response.json();
        const arraydata = [data];
        console.log(arraydata);

        // API DATA (COVID-19 Update Section)
        head1.innerText = arraydata[0].Global.NewConfirmed;
        head2.innerText = arraydata[0].Global.TotalConfirmed;
        head3.innerText = arraydata[0].Global.TotalRecovered;
        head4.innerText = arraydata[0].Global.TotalDeaths;
        
        }
        catch{
            console.log("Error");
        }
}
submit.addEventListener('click',getinfo);

// Styling OF (COVID-19_UPDATE_SECTION)
// head1.style.color="red";
// head2.style.color="pink";
// head3.style.color="orange";
// head4.style.color="green";
