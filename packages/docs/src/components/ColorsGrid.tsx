import { colors } from '@jeje-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([name, value]) => {
    return (
      <div key={name} style={{ backgroundColor: value, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(value, '#fff') < 3.5 ? '#000' : '#ffffff',
          }}
        >
          <strong>{name}</strong>
          <span>{value}</span>
        </div>
      </div>
    )
  })
}
