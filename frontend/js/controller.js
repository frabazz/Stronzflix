const searchTab = document.getElementById('search-tab');
const titleTab = document.getElementById('title-tab');
const mediaTab = document.getElementById('media-tab');

const backend = "http://127.0.0.1:8989";

var site = undefined;
var url = undefined;
var title = undefined;

function setController(controller)
{
    if(controller != 'search')
        searchTab.style.display = 'none';
    else
        searchTab.style.display = 'block';
    
        if(controller != 'title')
        titleTab.style.display = 'none';
    else
    {
        titleTab.style.display = 'block';
        loadTitle();
    }
    
    if(controller != 'media')
        mediaTab.style.display = 'none';
    else
    {
        mediaTab.style.display = 'block';
        loadMedia();
    }
}

const loadingDialog = document.getElementById('loading-dialog');

async function startLoading()
{
    loadingDialog.showModal();
}

async function stopLoading()
{
    loadingDialog.close();
}
