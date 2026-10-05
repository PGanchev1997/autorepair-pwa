AutoRepair PWA v19

VIN decoder v19:
- validates 17-character VIN format
- uses a European-oriented DB.VIN source as an additional source
- uses NHTSA vPIC as secondary source
- cross-checks fields when both sources return data
- does not accept suspicious NHTSA years for European Ford as fact
- does not allow a VIN vehicle into the local service catalog unless the engine code is confirmed in the local catalog

Important: production-grade exact VIN identification for European vehicles should ultimately use a licensed professional source such as TecAlliance/TecDoc or another contracted European VIN data provider. v19 is designed to fail safely instead of inventing specifications.
