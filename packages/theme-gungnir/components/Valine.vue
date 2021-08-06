<template>
<span :id="this.$route.path" class="leancloud_visitors">
        <span class="leancloud-visitors-count"></span>
</span>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    // console.log(this.$route.path);
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'K0sgCs7OmHvAsI5MWVbjx2ei-gzGzoHsz',// your appId
      appKey: 'Sk8tOGpGSsuA8W111XTGyEq9', // your appKey
    //   avatar:'mm', 
      path: window.location.pathname,
      placeholder: '留下你想说的话吧~',
      visitor: true,
    });
  },
}
</script>
