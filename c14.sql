CREATE TABLE login (
    username VARCHAR(10) PRIMARY KEY NOT NULL,
    password VARCHAR(5) NOT NULL
);

INSERT INTO login (username,password) VALUES 
('novri', '1212');


CREATE TABLE mahasiswa (
    nim INTEGER PRIMARY KEY NOT NULL,
    nama_mhs VARCHAR(25) NOT NULL,
    alamat VARCHAR(100) NOT NULL,
    id_jurusan CHARACTER(5) NOT NULL,
    umur CHARACTER(2) NOT NULL,
    FOREIGN KEY (id_jurusan) REFERENCES jurusan(id_jurusan)
);

INSERT INTO mahasiswa (nim,nama_mhs,alamat,id_jurusan,umur) VALUES 
(12121, 'novrizaldi', 'kandis', 'TI', 19), 
(12122, 'rudi rahman', 'bangko', 'TI', 23),
(12123, 'rama apriani', 'jambi', 'AG', 24),
(12124, 'husnul amri', 'merangin', 'DG', 21),
(12125, 'ilham nurrahman', 'bekasi', 'TS', 23),
(12126, 'ari verdana', 'bangko', 'TS', 19);


CREATE TABLE jurusan (
    id_jurusan CHARACTER(5) PRIMARY KEY NOT NULL,
    nama_jurusan VARCHAR(20) NOT NULL
);

INSERT INTO jurusan (id_jurusan, nama_jurusan) VALUES 
('TI', 'teknik informatika'),
('AG', 'ilmu agama'),
('DG', 'desain grafis'),
('TS', 'teknik sipil');


CREATE TABLE dosen (
    id_dosen INTEGER PRIMARY KEY AUTOINCREMENT,
    nama_dosen VARCHAR(25) NOT NULL
);

INSERT INTO dosen (id_dosen, nama_dosen) VALUES 
(20122, 'lakri maltaf'),
(20123, 'dedet rahmad '),
(20124, 'julius santoni'),
(20125, 'andri rizki'),
(20121, 'fajrul islami');

CREATE TABLE mata_kuliah (
    id_mk CHARACTER(5) PRIMARY KEY NOT NULL,
    nama_mk VARCHAR(25) NOT NULL,
    sks INTEGER NOT NULL
);
INSERT INTO mata_kuliah (id_mk, nama_mk, sks) VALUES 
('001', 'data maining', 3 ),
('002', 'struktur data', 3),
('003', 'kalkulus', 3),
('004', 'javascript', 3),
('005', 'pancasila', 3);

CREATE TABLE KRS (
    no_krs CHARACTER(10) PRIMARY KEY NOT NULL,
    nim INTEGER NOT NULL,
    id_mk CHARACTER (5) NOT NULL,
    id_dosen INTEGER NOT NULL,
    nilai CHARACTER(2) NOT NULL,
    FOREIGN KEY (nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY (id_mk) REFERENCES mata_kuliah(id_mk),
    FOREIGN KEY (id_dosen) REFERENCES dosen(id_dosen)
);

INSERT INTO KRS (no_krs, nim, id_mk, id_dosen, nilai) VALUES
('MHS001', 12121, '001', 20121, 'A'),
('MHS002', 12121, '002', 20122, 'B'),
('MHS003', 12121, '003', 20124, 'A'),
('MHS004', 12122, '001', 20121, 'C'),
('MHS005', 12122, '002', 20122, 'D'),
('MHS006', 12122, '003', 20124, 'B'),
('MHS007', 12122, '004', 20125, 'E'),
('MHS008', 12123, '001', 20121, 'A'),
('MHS009', 12133, '002', 20122, 'B'),
('MHS010', 12124, '003', 20124, 'A'),
('MHS011', 12124, '003', 20124, 'D'),
('MHS012', 12125, '005', 20124, 'A');

-- 1. menampilkan seluruh mahasiswa dan jurusan 
SELECT *
FROM mahasiswa 
INNER JOIN jurusan ON jurusan.id_jurusan = mahasiswa.id_jurusan;

-- 2. menampilkan mahasiwa yang umurnya dibawah 20 tahun
SELECT * FROM mahasiswa WHERE umur < 20;

-- 3. menampilkan mahasiswa yang memiliki nilai B ke atas
SELECT * FROM KRS 
INNER JOIN mahasiswa ON KRS.nim = mahasiswa.nim 
WHERE nilai IN ('C', 'D', 'E');

-- 4. mahasiswa yang memiliki sks lebih dari 10
SELECT no_krs,
nama_mhs as mahasiswa,
sum(sks) as sks
FROM KRS
INNER JOIN mahasiswa ON mahasiswa.nim = KRS.nim
INNER JOIN mata_kuliah ON mata_kuliah.id_mk = KRS.id_mk
GROUP BY 
nama_mhs
HAVING 
sum(sks) > 10;

-- 5. mahasiswa yang mengambil data maining
SELECT no_krs, 
nama_mk as mata_kuliah, 
nama_mhs as mahasiswa
FROM KRS
INNER JOIN mata_kuliah ON mata_kuliah.id_mk = KRS.id_mk
INNER JOIN mahasiswa ON mahasiswa.nim = KRS.nim
WHERE  mata_kuliah.id_mk = '001';

-- 6. tampilkan jumlah mahaasiswa untuk setiap dosen
SELECT id_dosen, 
COUNT(*) AS jumlah_mhasiswa
FROM KRS
GROUP BY 
nim;

-- 7. urutkan mahasiswa berdasarkan umurnya
SELECT * FROM mahasiswa ORDER BY umur; 

-- 8 tampilkan mata_kuliah yang harus diulang, 
-- serta tampilkan mahasiswa, jurusan dan dosen secara lengkap
SELECT * FROM KRS
INNER JOIN mata_kuliah ON mata_kuliah.id_mk = KRS.id_mk
INNER JOIN mahasiswa ON mahasiswa.nim = KRS.nim
INNER JOIN dosen ON dosen.id_dosen = KRS.id_dosen
INNER JOIN jurusan ON  jurusan.id_jurusan = mahasiswa.id_jurusan 
WHERE nilai IN ('D', 'E');





