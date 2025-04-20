import Typesense from 'typesense';

export const client = new Typesense.Client({
    'nodes': [{
      'host': 'jsxzt2m3car8he0np-1.a1.typesense.net', // For Typesense Cloud use xxx.a1.typesense.net
      'port': '443',      // For Typesense Cloud use 443
      'protocol': 'https'   // For Typesense Cloud use https
    }],
    'apiKey': 'Dp9up733ztEfSCnazthmo709rAddirbP',
    'connectionTimeoutSeconds': 2
  })