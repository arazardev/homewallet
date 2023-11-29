<script>
    export let to=""
    export let title=""
</script>
<li>
    <a href={to} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <slot name="icon"></slot>
        <span class="ms-3">{title}</span>
    </a>
 </li>