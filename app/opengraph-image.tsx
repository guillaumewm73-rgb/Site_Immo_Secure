import { ImageResponse } from 'next/og';
import { company, seoContent } from '@/content/siteContent';

export const alt = seoContent.ogImageAlt;
export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          background:
            'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 58%, #f8fafc 100%)',
          color: '#0f172a',
          fontFamily: 'sans-serif'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -90,
            width: 360,
            height: 360,
            borderRadius: 9999,
            background: 'rgba(37,99,235,0.12)',
            filter: 'blur(40px)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: 'rgba(15,23,42,0.08)',
            filter: 'blur(46px)'
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '64px 72px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18
            }}
          >
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: 22,
                background: '#0f172a',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 30,
                fontWeight: 700
              }}
            >
              ⚡
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ fontSize: 34, fontWeight: 700 }}>{company.agency}</div>
              <div style={{ fontSize: 20, color: '#64748b' }}>{company.offerName}</div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 48,
              alignItems: 'stretch'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '64%'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignSelf: 'flex-start',
                  padding: '12px 22px',
                  borderRadius: 9999,
                  background: '#ffffff',
                  border: '1px solid #dbe4f0',
                  color: '#2563eb',
                  fontSize: 18,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: 26
                }}
              >
                SEO + conversion
              </div>
              <div
                style={{
                  fontSize: 66,
                  lineHeight: 1.02,
                  fontWeight: 800,
                  letterSpacing: '-0.05em'
                }}
              >
                Réponse instantanée et plus de mandats pour votre agence immobilière.
              </div>
              <div
                style={{
                  marginTop: 26,
                  fontSize: 28,
                  lineHeight: 1.4,
                  color: '#64748b'
                }}
              >
                Leads chauds, relance des estimations, suivi commercial plus rigoureux.
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                width: '36%',
                padding: 28,
                borderRadius: 34,
                background: 'rgba(255,255,255,0.88)',
                border: '1px solid rgba(226,232,240,0.95)'
              }}
            >
              {['Lead entrant', 'Réponse immédiate', 'RDV proposé', 'Mandat sécurisé'].map((step, index) => (
                <div
                  key={step}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    padding: '18px 20px',
                    borderRadius: 24,
                    background: index === 3 ? '#0f172a' : '#ffffff',
                    border: index === 3 ? '1px solid rgba(15,23,42,1)' : '1px solid rgba(226,232,240,0.95)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      fontSize: 14,
                      textTransform: 'uppercase',
                      letterSpacing: '0.16em',
                      color: index === 3 ? 'rgba(255,255,255,0.65)' : '#2563eb',
                      fontWeight: 700
                    }}
                  >
                    {`Étape ${index + 1}`}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      fontSize: 28,
                      fontWeight: 700,
                      color: index === 3 ? '#ffffff' : '#0f172a'
                    }}
                  >
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
