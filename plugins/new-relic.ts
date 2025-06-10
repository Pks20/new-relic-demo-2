import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent';

export default defineNuxtPlugin(() => {
  const options = {
    init: { distributed_tracing: { enabled: true } },
    info: {
      applicationID: '1134593720',
      licenseKey: 'NRJS-c4f4bebb40069625bc8',
      accountID: '6813646',
      itrustKey: '6813646',
      agent: '1134593720',
    }, // NREUM.info
    loader_config: {
      applicationID: '1134593720',
      licenseKey: 'NRJS-c4f4bebb40069625bc8',
      accountID: '6813646',
      trustKey: '6813646',
      agent: '1134593720',
    },
  };

  // eslint-disable-next-line no-new
  new BrowserAgent(options);
});
