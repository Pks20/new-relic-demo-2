import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent';

export default defineNuxtPlugin(() => {
  const options = {
    init: {
      distributed_tracing: { enabled: true },
      ajax: { deny_list: [] }, // Ensure all requests are captured
      error_collection: { enabled: true }, // Enable automatic error tracking
      page_view_timing: { enabled: true } // Required for PageView events
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
    router.onError((error) => {
      if (error.message.includes('404')) {
        agent.api.noticeError(error);
        agent.api.addPageAction('Route404', {
          route: router.currentRoute.value.path,
          referrer: document.referrer
        });
      }
    });

});