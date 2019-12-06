function convertHTML(str) {
  var htmlCodesMap = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&apos;'
  };

  return str.replace(/([&<>\"'])/g, match => htmlCodesMap[match]);
}

convertHTML("Dolce & Gabbana");

// Time = 2