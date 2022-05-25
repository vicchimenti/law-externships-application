INSERT INTO tblAgencies (an, ag, ad, ci, st, co, zi, ur, ac, lo, sp, sv, de, ma, hr, hs, pr, ju, ty, re, pe, ss)
SELECT
   MY_XML.Customer.query('Document').value('.', 'VARCHAR(20)'),
   MY_XML.Customer.query('Name').value('.', 'VARCHAR(50)'),
   MY_XML.Customer.query('Address').value('.', 'VARCHAR(50)'),
   MY_XML.Customer.query('Profession').value('.', 'VARCHAR(50)')
FROM (SELECT CAST(MY_XML AS xml)
      FROM OPENROWSET(BULK 'C:\Users\Victo\OneDrive - Seattle University\Marcom\Law\Externships\XML Folder\20220520\lawExternshipsActive.xml', SINGLE_BLOB) AS T(MY_XML)) AS T(MY_XML)
      CROSS APPLY MY_XML.nodes('dataroot/tblAgencies') AS MY_XML (Customer);
      