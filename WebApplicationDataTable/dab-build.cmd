@echo off
@echo This cmd file creates a Data API Builder configuration based on the chosen database objects.
@echo To run the cmd, create an .env file with the following contents:
@echo dab-connection-string=your connection string
@echo ** Make sure to exclude the .env file from source control **
@echo **
dotnet tool install -g Microsoft.DataApiBuilder --prerelease
dab init -c dab-config.json --database-type mysql --connection-string "@env('dab-connection-string')" --host-mode Development
@echo Adding tables
dab add "Citiesofworld" --source "[].[citiesofworld]" --fields.include "id,sigla,sigla_city,sigla_country,airport_name,city,international,priority" --permissions "anonymous:*" 
@echo Adding views and tables without primary key
@echo Adding column descriptions
@echo Adding relationships
@echo **
@echo ** run 'dab validate' to validate your configuration **
@echo ** run 'dab start' to start the development API host **
