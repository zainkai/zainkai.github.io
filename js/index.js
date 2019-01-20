
const gClickNav = function(resouceName) {
  gtag('event', 'click', {
    'event_category': 'outbound',
    'event_label': resouceName,
    'transport_type': 'beacon'
  })
}
