<script>
    import "../app.pcss"
    import ListIcon from "$lib/ui/icons/ListIcon.svelte"
	import SidebarLink from "./SidebarLink.svelte";
	import GraphIcon from "$lib/ui/icons/GraphIcon.svelte";
	import TestIcon from "../lib/ui/icons/TestIcon.svelte";
	import CashIcon from "../lib/ui/icons/CashIcon.svelte";
    const sidebarHideClass = ""
    const sidebarShowClass = "-translate-x-full xlg:translate-x-0"
    let sidebarShow = false
    $: sidebarClassResponsiveSm = sidebarShow ? sidebarHideClass : sidebarShowClass

    function toggleSideBar (){
        sidebarShow = !sidebarShow
    }

    $: theme = "dark"

    $: if (theme === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

    function toggleTheme (){
        if(theme==="dark"){
            theme = "light"
        } else {
            theme = "dark"
        }
    }

    
</script>

<button on:click={()=>toggleSideBar()}  type="button" class="fixed top-3 box-border items-center p-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
 </button>
 
 <aside class="fixed top-0 left-0 z-50 w-48 box-border h-screen transition-transform {sidebarClassResponsiveSm}" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-slate-300 dark:bg-gray-950">
        <button on:click={()=>toggleSideBar()}  type="button" class="fixed top-3 items-center  mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/></svg>         
        </button>
            <ul class="space-y-2 font-medium mt-10">
          <li>
             <a href="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"/></svg>                
                <span class="ms-3">Principal</span>
             </a>
          </li>          
          <li>
            <a href="/fees" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">Cuotas</span>
            </a>
         </li>  
         <SidebarLink title="Gastos fijos" to="/fixed-costs">
            <ListIcon slot="icon"></ListIcon>
         </SidebarLink>
         <SidebarLink title="Gastos Variables" to="/var-costs">
            <GraphIcon slot="icon"></GraphIcon>
         </SidebarLink>
         <SidebarLink title="Ingresos" to="/revenue-sources">
            <CashIcon slot="icon"></CashIcon>
         </SidebarLink>
         <SidebarLink title="Test" to="/test-page">
            <TestIcon slot="icon"></TestIcon>
         </SidebarLink>
       </ul>
    </div>
 </aside>

<button on:click={toggleTheme} id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed right-0">
    {#if theme==="dark"}
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Z"/></svg>
    {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 5V1h2v4h-2Zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425L17.65 7.75ZM19 13v-2h4v2h-4Zm-8 10v-4h2v4h-2ZM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35L6.35 7.7Zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75L19.05 20.5ZM1 13v-2h4v2H1Zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7l-2.85 2.85ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"/></svg>
    {/if}
</button>

 
<div class="main bg-slate-200 box-border dark:bg-gray-800 dark:text-white">
    <div class="grid place-content-center">
        <slot></slot>
    </div>
</div>
<div class="footer">
</div>


<style>
    div.main{
        height: 100vh;
        min-height: 100%;
    }

    div.footer {
        position: static;
        margin-top: 100px;
        bottom: 0;
        background-color: rgb(10, 19, 41);
        width: 100vw;
        max-width:100%;
        height: 50px;
    }
</style>