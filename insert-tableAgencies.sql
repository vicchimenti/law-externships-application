INSERT INTO tblAgencies (an, ag, ad, ci, st, co, zi, ur, ac, lo, sp, sv, de, ma, hr, hs, pr, ju, ty, re, pe, ss)
SELECT
    MY_XML.tblAgencies.query('an').value('.', 'INT'),
    MY_XML.tblAgencies.query('ag').value('.', 'NVARCHAR(max)'),
    MY_XML.tblAgencies.query('ad').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('ci').value('.', 'NVARCHAR(128)'),
    MY_XML.tblAgencies.query('st').value('.', 'NVARCHAR(128)'),
    MY_XML.tblAgencies.query('co').value('.', 'NVARCHAR(128)'),
    MY_XML.tblAgencies.query('zi').value('.', 'NVARCHAR(20)'),
    MY_XML.tblAgencies.query('ur').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('ac').value('.', 'NVARCHAR(128)'),
    MY_XML.tblAgencies.query('lo').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('sp').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('sv').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('de').value('.', 'NVARCHAR(max)'),
    MY_XML.tblAgencies.query('ma').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('hr').value('.', 'NVARCHAR(128)'),
    MY_XML.tblAgencies.query('hs').value('.', 'NVARCHAR(128)'),
    MY_XML.tblAgencies.query('pr').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('ju').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('ty').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('re').value('.', 'NVARCHAR(128)'),
    MY_XML.tblAgencies.query('pe').value('.', 'NVARCHAR(max)'),
    MY_XML.tblAgencies.query('ss').value('.', 'INT')
FROM (SELECT CAST(MY_XML AS xml)
        FROM OPENROWSET(BULK 'https://redhawks-my.sharepoint.com/personal/chimenti_seattleu_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fchimenti%5Fseattleu%5Fedu%2FDocuments%2FMarcom%2FLaw%2FExternships%2FXML%20Folder%2F20220520/lawExternshipsActive.xml', SINGLE_BLOB) AS T(MY_XML)) AS T(MY_XML)
        CROSS APPLY MY_XML.nodes('dataroot/tblAgencies') AS MY_XML (tblAgencies);
      