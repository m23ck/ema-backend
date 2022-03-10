import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as pactum from 'pactum';
import { CreateMedewerkerDto } from 'src/medewerker/dto';
import { PrismaService } from '../src/prisma/prisma.service';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    const app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(4424);

    prisma = app.get(PrismaService);
    pactum.request.setBaseUrl('http://localhost:4423');
  });

  afterAll(() => {
    app.close();
  });

  describe('Medewerker', () => {
    describe('Create Medewerker', () => {
      const dto: CreateMedewerkerDto = {
        voornaam: 'Andojo',
        achternaam: 'Mack',
        geslacht: 'M',
        email: 'andojomack@gmail.com',
        telefoon: 8409113,
        straatnaam: 'salvadorstraat',
        huisnummer: '5a',
        district: 'paramaribo',
        isActive: true,
      };
      it('should create medewerker', () => {
        return pactum.spec().post('medewerkers').expectStatus(201).inspect();
      });
    });
    describe('Get Medewerkers', () => {
      it('should get medewerkers', () => {
        return pactum
          .spec()
          .get('/medewerkers')
          .expectStatus(200)
          .expectJsonLength(1)
          .expectBody([])
          .inspect();
      });
    });
    describe('Get Medewerker by ID', () => {
      it('should get medewerkers by Id', () => {
        return pactum
          .spec()
          .get('/medewerkers/1')
          .expectStatus(200)
          .expectBody([])
          .inspect();
      });
    });
    describe('Edit Medewerker', () => {});
    describe('Activate / Deactivate Medewerker', () => {});
    describe('Delete Medewerker', () => {});
  });

  it.todo('should pass');
});
