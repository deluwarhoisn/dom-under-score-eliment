document.getElementById('btn-update-title').addEventListener('click', function(){
            // console.log('btnclicked')
            const pageTitleElement = document.getElementById('page-title');
            console.log('pageTitleElement');
            pageTitleElement.innerText = 'Updated page title text.'
        })

         document.getElementById('btn-login')
            .addEventListener('click', function(){
                const userinfoEl = document.getElementById('user-info');
                userinfoEl.innerText='user logged in succesfully'

            })