const submitButton=document.getElementById("submit"),inputs=document.querySelectorAll("#careersForm input"),theform=document.getElementById("careersForm");function addDirtyListeners(){inputs.forEach((function(t){t.addEventListener("input",dirtyInput,!1),t.addEventListener("blur",dirtyInput,!1)}))}function dirtyInput(t){elem=t.currentTarget,(elem.nodeName="INPUT")&&elem.classList.add("dirty")}window.addEventListener("load",(t=>{addDirtyListeners(),submitButton.setAttribute("disabled","disabled"),submitButton.style.cursor="not-allowed"}),!1),inputs.forEach((function(t){t.addEventListener("keyup",(t=>{const e=t.currentTarget.value;submitButton.disabled=!1,submitButton.style.cursor="pointer",""===e&&(submitButton.disabled=!0,submitButton.style.cursor="not-allowed")}),!1)}));