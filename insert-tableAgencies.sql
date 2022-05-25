INSERT INTO tblAgencies (an, ag, ad, ci, st, co, zi, ur, ac, lo, sp, sv, de, ma, hr, hs, pr, ju, ty, re, pe, ss)
SELECT
    MY_XML.tblAgencies.query('an').value('.', 'INT'),
    MY_XML.tblAgencies.query('ag').value('.', 'NVARCHAR(max)'),
    MY_XML.tblAgencies.query('ad').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('ci').value('.', 'NVARCHAR(128)'),
    MY_XML.tblAgencies.query('ci').value('.', 'NVARCHAR(128)'),
    MY_XML.tblAgencies.query('zi').value('.', 'NVARCHAR(20)'),
    MY_XML.tblAgencies.query('ur').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('ac').value('.', 'NVARCHAR(128)'),
    MY_XML.tblAgencies.query('lo').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('sp').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('sv').value('.', 'NVARCHAR(256)'),
    MY_XML.tblAgencies.query('de').value('.', 'NVARCHAR(max)'),
    MY_XML.tblAgencies.query('ma').value('.', 'NVARCHAR(256)'),

	ma NVARCHAR (256),
	hr NVARCHAR (128),
	hs NVARCHAR (128),
	pr NVARCHAR (256),
	ju NVARCHAR (256),
	ty NVARCHAR (256),
	re NVARCHAR (128),
	pe NVARCHAR (max),

FROM (SELECT CAST(MY_XML AS xml)
        FROM OPENROWSET(BULK 'C:\Users\Victo\OneDrive - Seattle University\Marcom\Law\Externships\XML Folder\20220520\lawExternshipsActive.xml', SINGLE_BLOB) AS T(MY_XML)) AS T(MY_XML)
        CROSS APPLY MY_XML.nodes('dataroot/tblAgencies') AS MY_XML (tblAgencies);
      