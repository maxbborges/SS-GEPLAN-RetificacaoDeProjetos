function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("usuario_fluig");
	dataset.addColumn("senha_fluig");
	dataset.addColumn("empresa_fluig");
	dataset.addColumn("matricula_fluig");
	
	var row = [];
	//row.push("maxweellb@hotmail.com","2*04Dm^&TB$#d0h8","1","69ee1573e1c944f58990de061e461037");
	row.push("fluigadmin","flui9@Adm#2o20","1","8914b3c4888311eaada01a90e4ae0e5f");
	
	dataset.addRow(row);
	return dataset;
}