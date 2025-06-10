import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent';

export default defineNuxtPlugin(() => {
  const options = {
    init: {
      ajax: { deny_list: [] }, // Ensure all requests are captured
      error_collection: { enabled: true }, // Enable automatic error tracking
      page_view_timing: { enabled: true },
      session_replay: {enabled:true,block_selector:'',mask_text_selector:'*',sampling_rate:10.0,error_sampling_rate:100.0,mask_all_inputs:true,collect_fonts:true,inline_images:false,inline_stylesheet:true,fix_stylesheets:true,preload:true,mask_input_options:{}},distributed_tracing:{enabled:true},privacy:{cookies_enabled:true}// Required for PageView events
    },
    info: {
      applicationID: '1134593720',
      licenseKey: 'NRJS-c4f4bebb40069625bc8',
      accountID: '6813646',
    },
    loader_config: {
      accountID: '6813646',
      applicationID: '1134593720',
      licenseKey: 'NRJS-c4f4bebb40069625bc8',
      trustKey: '6813646',
    }
  };

  // Initialize the agent
  const agent = new BrowserAgent(options);
  
  // Add custom error handler for Nuxt route errors

  const router = useRouter();
        agent.api.noticeError("SHUBHAM MITHHA");
        agent.api.addPageAction('Route404', {
          route: router.currentRoute.value.path,
          referrer: document.referrer
        });

   

});